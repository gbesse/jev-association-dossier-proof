// Objectif : vérifier que les types publics sont importables.
import { associationCase, assessAssociationDossier } from "../src/index.mjs";
const dossier = associationCase({
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
});
void assessAssociationDossier(dossier, { decide: async () => ({}) });
