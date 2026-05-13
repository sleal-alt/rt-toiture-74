import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES } from "@/lib/siteData";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm({ source = "contact", compact = false }) {
  const [form, setForm] = useState({ nom: "", telephone: "", email: "", service: "", ville: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "maldinireinhardt74@gmail.com",
      subject: `Nouvelle demande de devis — ${form.nom} — ${form.service || "Non précisé"}`,
      body: `
Nom : ${form.nom}
Téléphone : ${form.telephone}
Email : ${form.email}
Service : ${form.service || "Non précisé"}
Ville : ${form.ville || "Non précisé"}
Source : ${source}

Message :
${form.message}
      `.trim(),
    });
    setSent(true);
    setSending(false);
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold mb-2">Demande envoyée !</h3>
        <p className="text-muted-foreground">Nous vous recontactons sous 24h maximum.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Nom complet *</label>
          <Input required value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="Votre nom" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Téléphone *</label>
          <Input required type="tel" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} placeholder="06 XX XX XX XX" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Email</label>
          <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="votre@email.fr" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Ville</label>
          <Input value={form.ville} onChange={e => setForm({ ...form, ville: e.target.value })} placeholder="Votre ville" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-1.5 block">Service souhaité</label>
        <Select value={form.service} onValueChange={v => setForm({ ...form, service: v })}>
          <SelectTrigger><SelectValue placeholder="Sélectionnez un service" /></SelectTrigger>
          <SelectContent>
            {SERVICES.map(s => (
              <SelectItem key={s.slug} value={s.shortTitle}>{s.shortTitle}</SelectItem>
            ))}
            <SelectItem value="Autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-1.5 block">Message *</label>
        <Textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Décrivez votre projet ou problème..." rows={compact ? 3 : 5} />
      </div>
      <Button type="submit" disabled={sending} size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold gap-2">
        {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        {sending ? "Envoi en cours..." : "Envoyer ma Demande"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">Réponse garantie sous 24h • Devis 100% gratuit et sans engagement</p>
    </form>
  );
}