// Objectif : effectuer un appel Jev synthétique uniquement sur demande explicite.
import { createJevClient } from "../src/jev.mjs";
import { assessAssociationDossier } from "../src/index.mjs";
const client = createJevClient();
const résultat = await assessAssociationDossier({
  "id": "exemple-1",
  "text": "L’association a pour objet la médiation scientifique et demande une aide pour des ateliers scolaires déjà décrits dans son bilan.",
  "source": {
    "url": "https://example.test/source-publique",
    "date": "2026-09-25"
  },
  "details": {
    "territoire": "Commune Exemple",
    "origine": "donnée synthétique"
  }
}, client);
console.log(JSON.stringify({ décision: résultat.decision, confiance: résultat.confidence, usage: résultat.usage }, null, 2));
