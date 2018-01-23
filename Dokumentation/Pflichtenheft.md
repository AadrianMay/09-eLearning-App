# **Pflichtenheft**

**Über diese Vorlage**

Quelle: *Helmut Balzert, Lehrbuch der Softwaretechnik: Basiskonzepte und Requirements Engineering, 3. Auflage, Spektrum Akademischer Verlag Heidelberg, 2009.*

# 1 Visionen und Ziele
Beschreibung der Visionen und Ziele, die durch den Einsatz des Systems erreicht werden sollen:

Visionen

| Visionen | Beschreibung |
| --- | --- |
| /V10/ | Eine „eLearning-App“ zu entwickeln, die dem Anwender (dem Studenten) die Möglichkeit bietet jederzeit lernen zu können |
| /V20/ | Eine „eLearning-App“ zu entwickeln, die darüber hinaus leicht zu bedienen ist und somit das Lernen fördern soll. |
| /V30/ | Eine „eLearning-App zu entwickeln, die eine Alternative zur Prüfungsvorbereitung bietet oder zu mindestens eine (sehr) gute Ergänzung darstellt. |

| Ziele | Beschreibung |
| --- | --- |
| /Z10/ | Der Anwender (Student) muss jederzeit Zugriff auf die „eLearning-App“ haben. Die Anwendung soll daher zeit- und ortunabhängig sein. |
| /Z20/ | Der Anwender (Student) soll die „eLearning-App“ auf allen aktuellen internetfähigen Geräten nutzen können. Die Anwendung soll plattformunabhängig sein. |
| /Z30/ | Die Anwendung soll möglichst vollständig sein. |
| /Z40/ | Die Anwendung soll leicht zu bedienen sein, sowohl für den Anwender als auch für den Administrator. |
| /Z50/ | Die Anwendung soll den Fortschritt der Anwender speichern können. |

# 2 Rahmenbedingungen
Beschreibung der organisatorischen Rahmenbedingungen: Anwendungsbereiche, Zielgruppen, Betriebsbedingungen

| Rahmenbedingungen | Beschreibung |
| --- | --- |
| /R10/ | Die Anwendung wird von Studenten als Lernhilfe und Prüfungsvorbereitung genutzt. |
| /R20/ | Die Zielgruppe der Anwendung sind Studenten der Hochschule Niederrhein im Fachbereich 08 im Studiengang Wirtschaftsinformatik. Eine Ausweitung auf andere Fachbereiche und Studiengänge wäre zu einem späteren Zeitpunkt denkbar. |
| /R30/ | Das Backend Anwendung erfordert einen Webserver der 24 Stunden und 7 Tage die Woche erreichbar ist, das Frontend erfordert ein aktuelles internetfähiges Endgerät (z.B. Computer, Notebook, Smartphone etc.). |
| /R40/ | Die eLearning-App soll 24 Stunden und 7 Tage die Woche nutzbar sein. |
| /R50/ | unbeaufsichtigter Betrieb, die Anwender (Studenten) sollen die Webanwendung selbständig nutzen können. |

Bei der technischen Produktumgebung sind folgende Festlegungen zu treffen:

| Technische Produktumgebung | Beschreibung |
| --- | --- |
| /R60/ | Microsoft Visual Studio als IDE in Verbindung mit Angular (TypeScript-basiertes Front-End-Webapplikationsframework) |
| /R70/ | Computer/Notebook | 
| /R80/ | Organisatorische Randbedingungen und Voraussetzungen |  
| zu /R80/ | Zeitrahmen: Mitte Oktober 2017 bis Mitte Januar 2018 (ca. drei Monate) |
| zu /R80/ | Team: Gruppe aus vier Studenten |
| zu /R80/ | Dokumentation: Pflichtenheft und Architekturdokumentation |
| zu /R80/ | Präsentation: 30 Min. bestehend aus PP-Präs. und Poster |
| zu /R80/ |  Versionsverwaltungssystem: GitHub, Trello (nur intern) |

Bei den Anforderungen an die Entwicklungsumgebung sind folgende Festlegungen zu treffen:

| Anforderungen an die Entwicklungsumgebung | Beschreibung |
| --- | --- |
| /R90 |  Visualstudio 2017 Community |
| /R100 | Computer/Notebook |
| /R110 | GitHub, Trello, Skype |  
| /R120 | Datenbankschnittstelle (DBMS) |  

# 3 Kontext und Überblick
Festlegung der relevanten Systemumgebung (Kontext) und Überblick über das System:

- /K10/(Student) User Login <<extend>> Registrieren
- /K20/(Student) Kurs(Modul) auswählen
- /K30/(Student) Abfrage starten
- /K40/(Student) Fortschritt ansehen
- /K50/(Student) User Logout

- /K50/(Admin) User Login
- /K60/(Admin) Kurs(Modul) anlegen/bearbeiten/löschen
- /K70/(Admin) User anlegen/bearbeiten/löschen
- /K80/(Admin) Fortschritt zurücksetzen
- /K90/(Admin) User Logout

*Zum Beispiel auch: Übergreifendes Use Case Diagramm.*

# 4 Funktionale Anforderungen
Die Kernfunktionalität des Systems ist aus Auftraggebersicht auf oberster Abstraktionsebene zu beschreiben. Auf Detailbeschreibungen ist zu verzichten:

- /F10/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten sich zu registrieren, um sich in die Anwendungen einloggen zu können.
- /F20/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten sich einzuloggen, um die Anwendung nutzen zu können.
- /F30/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten verschiedene Kurse auswählen zu können, um die gewünschten Abfragen durchführen zu können.
- /F40/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten sich auszuloggen, damit kein anderer auf die Daten des Anwender zu greifen kann.
- /F50/ Das System soll dem Anwender (Studenten) die Möglichkeit bieten seinen Fortschritt zu speichern, um eine Übersicht zu erhalten bzw. an gewünschter Stelle fortzufahren.
- /F60/ Das System muss dem Administrator die Möglichkeit bieten sich einzuloggen, um vollen Zugriff auf die Anwendung zu haben.
- /F70/ Das System muss dem Administrator die Möglichkeit bieten Kurse(Module) anzulegen/zu bearbeiten/zu löschen, um die Anwendung zu vervollständigen bzw. zu aktuallisieren.
- /F80/ Das System soll nur dem Administrator die Möglichkeit bieten vollen Zugriff auf die Anwendung zu haben, damit die Anwendung geschützt ist.

*Zum Beispiel auch: Beischreibung einzelner Use Cases in Textform.*

Wenn bereits möglich, sind die funktionalen Anforderungen nach Statik, Dynamik und Logik zu gruppieren.

# 5 Qualitätsanforderungen
Es sollte anhand einer Tabelle eine verfeinerte Qualitätszielbestimmung für das System vorgenommen werden. Es eignen sich dazu die Qualitätsmerkmale der ISO/IEC 9126–1.
Einzelne Qualitätsanforderungen können unter Bezug auf die ISO/IEC 9126–1 wie folgt festgelegt werden:


- /QFS10/ Die Anwender dürfen keinen Zugriff auf Daten anderer User haben.
- /QFS20/ Die Anwender müssen ein ausreichend starkes Passwort wählen (Groß- und Kleinschreibung, Ziffern, Sonderzeichen).
- /QFS30/ Die Anwender sollen die Möglichkeit haben ihr Passwort zurücksetzen zu können.

- /QBE10/ Die Anwendung soll schlicht und übersichtlicht gestaltet sein, damit die Anwender sich schnell zu recht finden.
- /QBE20/ Die Anwendung muss performant sein.
- /QBE30/ Die Anwendung soll in der deutschen Sprachen sein.
- /QBE40/ Die Anwendung soll zahlreiche Kurse (Module) und Kontrollfragen enthalten.

# 6 Abnahmekriterien
Abnahmekriterien legen fest, wie Anforderungen bei der Abnahme auf ihre Realisierung überprüft werden können.

Eine Auswahl an Abnahmekriterien der Qualitätsanforderungen:

-	zu QBE10. jede Funktion muss schnell, d.h. mit max. 7(bis zu 10) Klicks erreichbar sein
-	zu QBE20. die Webanwendung muss für mehrere Benutzer (für 50 Benutzer) gleichzeitig erreichbar sein, ohne dass es aus Sicht eines einzelnen Benutzers zu Laufzeiteinbußen kommt
-	zu QBE40. Nach einem Jahr müssen >90% der Module in der Webanwendung sein und diese müssen Kontrollfragen erhalten.

-	zu QBE10: Test der Webanwendung
-	zu QBE10: Benutzertest mit Studierenden
-	zu QBE20: Test der Webanwendung mit mehreren Benutzern (bis zu 50)
-	zu QBE40: Statistische Auswertung: Zählen der Kurs in moodle und Vergleich mit dem Veranstaltungsangebot

# Glossar
Das Glossar besteht aus Glossarbegriffen mit anschließender Erklärung des jeweiligen Begriffs. Wird auf andere Glossarbegriffe verwiesen, dann wird dies durch einen Pfeil vor dem Begriff, auf den verwiesen wird, angegeben. Übersetzungen in andere Sprachen sowie Synonyme werden in Klammern hinter dem Glossarbegriff angegeben.
