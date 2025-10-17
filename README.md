En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés.

une méthode de programmation qui consiste à écrire un test automatisé qui échoue avant d'écrire le code de production
Rouge (écrire un test qui échoue), Vert (écrire le code minimal pour que le test passe), et Refactoriser (améliorer le code sans en modifier le comportement).

Citez deux avantages concrets du TDD

Amélioration de la qualité et réduction des bugs
Maintenance et refactorisation plus sûres

Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide.

En TDD, un stub et un fake sont tous deux des "doublures de test"Stub : Pour tester la fonction, vous créeriez un stub qui se ferait passer pour la base de données. Lorsque la fonction lui demande le taux de remise, le stub répondrait toujours 10% (ou toute autre valeur que vous avez codée en dur), sans faire de vrai calcul ni de véritable accès à une base.

// Pseudocode
stubDatabase.getDiscountRate() // Retourne toujours 0.10
Fake : Au lieu d'un stub, vous pourriez utiliser un "fake" de la base de données. Ce serait une simple base de données en mémoire (par exemple, un dictionnaire ou une liste). Vous pourriez y ajouter différentes remises, en supprimer, et le fake se comporterait comme une vraie base, mais sans la complexité (pas de connexion réseau, de transactions, etc.). Il a sa propre logique, bien que simplifiée.

// Pseudocode
fakeDatabase.addDiscount("SUMMER_SALE", 0.20)
fakeDatabase.addDiscount("WINTER_SALE", 0.15)
rate = fakeDatabase.getDiscountRate("SUMMER_SALE") // Retourne 0.20
