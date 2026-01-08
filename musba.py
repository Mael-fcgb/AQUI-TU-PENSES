def ask(q):
    while True:
        r = input(q + " (oui/non) : ").lower()
        if r in ["oui", "non"]:
            return r

def game():
    if ask("Ton personnage est-il humain ?") == "oui":
        if ask("Ton personnage est-il un bébé ?") == "oui":
            if ask("Ton personnage est-il debout ?") == "oui":
                print("Personnage trouvé : P3")
            else:
                print("Personnage trouvé : P15")
        else:
            if ask("Ton personnage est-il une femme ?") == "oui":
                if ask("Ton personnage est-il seul (portrait) ?") == "oui":
                    if ask("Ton personnage regarde-t-il vers la gauche du tableau ?") == "oui":
                        if ask("Ton personnage porte-t-il un vêtement rouge ?") == "oui":
                            print("Personnage trouvé : P14")
                        else:
                            print("Personnage trouvé : P12")
                    else:
                        print("Personnage trouvé : P13")
                else:
                    if ask("Ton personnage est-il en extérieur ?") == "oui":
                        if ask("Ton personnage porte-t-il un vêtement orange ?") == "oui":
                            print("Personnage trouvé : P11")
                        else:
                            if ask("Ton personnage est-il nu ?") == "oui":
                                print("Personnage trouvé : P10")
                            else:
                                print("Personnage trouvé : P16")
                    else:
                        if ask("Ton personnage est-il debout ?") == "oui":
                            if ask("Peut-on voir les deux pieds de ton personnage ?") == "oui":
                                print("Personnage trouvé : P17")
                            else:
                                if ask("Ton personnage est-il en train de chuchoter ?") == "oui":
                                    print("Personnage trouvé : P9")
                                else:
                                    print("Personnage trouvé : P1")
                        else:
                            if ask("Ton personnage porte-t-il un bandeau rouge ?") == "oui":
                                print("Personnage trouvé : P8")
                            else:
                                if ask("Voit-on les deux yeux de ton personnage ?") == "oui":
                                    print("Personnage trouvé : P18")
                                else:
                                    print("Personnage trouvé : P2")
            else:
                if ask("Ton personnage est-il assis ?") == "oui":
                    if ask("Ton personnage porte-t-il des chaussures blanches ?") == "oui":
                        print("Personnage trouvé : P4")
                    else:
                        print("Personnage trouvé : P7")
                else:
                    if ask("Ton personnage est-il nu ?") == "oui":
                        print("Personnage trouvé : P10")
                    else:
                        print("Personnage trouvé : P6")
    else:
        if ask("Ton personnage est-il debout ?") == "oui":
            print("Personnage trouvé : P19")
        else:
            if ask("Ton personnage est-il en train de dormir ?") == "oui":
                print("Personnage trouvé : P20")
            else:
                print("Personnage trouvé : P21")

game()
