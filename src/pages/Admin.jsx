import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus, Trash2, Eye, Wand2, Globe, FileText, Wrench } from "lucide-react";
import ReactMarkdown from "react-markdown";

const TYPE_LABELS = {
  commune: { label: "Commune", icon: Globe, color: "bg-blue-100 text-blue-700" },
  blog: { label: "Blog", icon: FileText, color: "bg-green-100 text-green-700" },
  service: { label: "Service", icon: Wrench, color: "bg-orange-100 text-orange-700" },
};

export default function Admin() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("commune");
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const loadPages = async () => {
    const data = await base44.entities.GeneratedPage.list("-created_date", 50);
    setPages(data);
    setLoading(false);
  };

  useEffect(() => { loadPages(); }, []);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setGenerating(true);
    setError("");
    try {
      const prompts = {
        commune: `Tu es un expert SEO local pour RT Toiture, couvreur artisan certifié RGE en Haute-Savoie (74), basé à Poisy. Téléphone: 06 69 43 41 42.

Génère une page SEO complète pour la commune: "${topic}"

Retourne un JSON avec:
- title: "Couvreur ${topic} 74 — RT Toiture | Devis Gratuit ☎ 06 69 43 41 42"
- slug: slug URL propre (ex: couvreur-annecy-74)
- meta_description: max 155 caractères, inclure ville et mot-clé couvreur
- content: contenu Markdown de 700 mots avec sections: intro locale, services (démoussage, traitement hydrofuge 10 ans garanti, zinguerie, étanchéité EPDM, peinture toiture), pourquoi RT Toiture (RGE, artisan local, devis 24h), appel à l'action avec téléphone`,

        blog: `Tu es un rédacteur web SEO spécialisé toiture/couverture pour RT Toiture 74, couvreur artisan RGE en Haute-Savoie.

Génère un article de blog sur: "${topic}"

Retourne un JSON avec:
- title: titre accrocheur avec mot-clé SEO
- slug: slug URL propre
- meta_description: max 155 caractères
- content: article Markdown de 900 mots avec H2/H3, conseils pratiques, et appel à l'action vers RT Toiture (06 69 43 41 42)`,

        service: `Tu es un expert SEO pour RT Toiture, couvreur artisan certifié RGE en Haute-Savoie (74).

Génère une page service détaillée pour: "${topic}"

Retourne un JSON avec:
- title: titre optimisé SEO pour ce service
- slug: slug URL propre
- meta_description: max 155 caractères
- content: page Markdown de 800 mots avec: description service, avantages, processus étape par étape, garanties RT Toiture, FAQ 3 questions, appel à l'action (06 69 43 41 42)`,
      };

      const result = await base44.integrations.Core.InvokeLLM({
        prompt: prompts[type],
        response_json_schema: {
          type: "object",
          properties: {
            title: { type: "string" },
            slug: { type: "string" },
            meta_description: { type: "string" },
            content: { type: "string" },
          },
          required: ["title", "slug", "meta_description", "content"],
        },
      });

      const page = await base44.entities.GeneratedPage.create({
        type,
        topic,
        title: result.title,
        slug: result.slug,
        meta_description: result.meta_description,
        content: result.content,
        status: "published",
        generated_by: "admin",
      });

      setPages([page, ...pages]);
      setTopic("");
      setPreview(page);
    } catch (e) {
      setError("Erreur lors de la génération. Réessaie.");
    } finally {
      setGenerating(false);
    }
  };

  const handleDelete = async (id) => {
    await base44.entities.GeneratedPage.delete(id);
    setPages(pages.filter(p => p.id !== id));
    if (preview?.id === id) setPreview(null);
  };

  const toggleStatus = async (page) => {
    const newStatus = page.status === "published" ? "draft" : "published";
    await base44.entities.GeneratedPage.update(page.id, { status: newStatus });
    setPages(pages.map(p => p.id === page.id ? { ...p, status: newStatus } : p));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold mb-1">Générateur de pages IA</h1>
          <p className="text-muted-foreground">Crée des pages SEO optimisées automatiquement avec l'IA</p>
        </div>

        {/* Formulaire génération */}
        <div className="bg-white rounded-xl border border-border p-6 mb-8 shadow-sm">
          <h2 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-primary" /> Générer une nouvelle page
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commune">🏘️ Commune</SelectItem>
                <SelectItem value="blog">📝 Blog</SelectItem>
                <SelectItem value="service">🔧 Service</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="flex-1"
              placeholder={
                type === "commune" ? "Ex: Annecy, Thonon-les-Bains, Évian..." :
                type === "blog" ? "Ex: Comment nettoyer une toiture en tuiles..." :
                "Ex: Traitement hydrofuge toiture, Zinguerie..."
              }
              value={topic}
              onChange={e => setTopic(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleGenerate()}
            />
            <Button onClick={handleGenerate} disabled={generating || !topic.trim()} className="gap-2">
              {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              {generating ? "Génération..." : "Générer"}
            </Button>
          </div>
          {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          {generating && (
            <p className="text-muted-foreground text-sm mt-3 flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> L'IA rédige votre page SEO, environ 15 secondes...
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Liste des pages */}
          <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold">Pages générées ({pages.length})</h2>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : pages.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <Wand2 className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p>Aucune page générée pour l'instant</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {pages.map(page => {
                  const T = TYPE_LABELS[page.type];
                  return (
                    <div key={page.id} className="px-6 py-4 hover:bg-muted/30 transition">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${T.color}`}>{T.label}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full cursor-pointer ${page.status === "published" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                              onClick={() => toggleStatus(page)}>
                              {page.status === "published" ? "Publié" : "Brouillon"}
                            </span>
                          </div>
                          <p className="font-medium text-sm truncate">{page.title || page.topic}</p>
                          <p className="text-xs text-muted-foreground">/{page.slug}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setPreview(page)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => handleDelete(page.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Prévisualisation */}
          <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-heading text-lg font-semibold">Prévisualisation</h2>
            </div>
            {preview ? (
              <div className="p-6 overflow-y-auto max-h-[600px]">
                <Badge className="mb-3">{TYPE_LABELS[preview.type]?.label}</Badge>
                <h3 className="font-heading text-xl font-bold mb-1">{preview.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">🔗 /{preview.slug}</p>
                <p className="text-sm text-muted-foreground italic mb-4 border-l-4 border-primary/30 pl-3">{preview.meta_description}</p>
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{preview.content}</ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                <Eye className="w-10 h-10 mb-3 opacity-30" />
                <p>Sélectionne une page pour la prévisualiser</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}