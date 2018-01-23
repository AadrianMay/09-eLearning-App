# **Architekturdokumentation**

**Über arc42**

arc42, das Template zur Dokumentation von Software- und
Systemarchitekturen.

Erstellt von Dr. Gernot Starke, Dr. Peter Hruschka und Mitwirkenden.

Template Revision: 7.0 DE (asciidoc-based), January 2017

© We acknowledge that this document uses material from the arc 42
architecture template, <http://www.arc42.de>. Created by Dr. Peter
Hruschka & Dr. Gernot Starke.

# 1 Einführung und Ziele

Beschreibt die wesentliche Anforderungen und treibenden Kräfte, die
Softwarearchitekten und Entwicklungsteams berücksichtigen müssen. Dazu
gehören die

-   zugrunde liegenden Geschäftsziele, wesentliche Aufgabenstellung und
    essenzielle fachliche Anforderungen an das System

-   Qualitätsziele für die Architektur

-   relevante Stakeholder und deren Erwartungshaltung

## Aufgabenstellung

- Im Rahmen der Veranstaltung BWI50202 .NET Vertiefung soll eine Webanwendung erstellt werden. Die angestrebte technische Lösung für das Projekt soll folgende Bestandteile enthalten:
- Frontend (Präsentation + Geschäftslogik): Webanwendung (ASP. NET Core / Java EE)
- Backend (Geschäftslogik + Datenhaltung): Web Services (ASP .NET Core Web-API / Spring Boot & Java)
- Siehe Pflichtenheft.md
- Die Aufgabe liegt darin mit nur wenigen Vorgaben eine Webanwendung zu entwickeln, welche eigenständig konkretisiert und ausgearbeitet werden muss. In diesem Fall wurde eine eigene Projektidee vorgeschlagen und mit dem Dozenten abgestimmt. 

## Qualitätsziele

- Die Webanwendung muss für die verschiedenen Benutzer (insb. Studierende und Dozenten) übersichtlich sein
- Die Webanwendung muss performant sein (schnell sein)
- Die Webanwendung soll die Kontrollfragen zu verschieden Modulen und Fachbereichen enthalten können

- zu 1. jede Funktion muss schnell, d.h. mit max. 7(bis zu 10) Klicks erreichbar sein
- zu 2. die Webanwendung muss für mehrere Benutzer (für 50 Benutzer) gleichzeitig erreichbar sein, ohne dass es aus Sicht eines einzelnen Benutzers zu Laufzeiteinbußen kommt
- zu 3. Nach einem Jahr müssen >90% der Module in der Webanwendung sein und diese müssen Kontrollfragen erhalten.

- zu 1: Test der Webanwendung
- zu 1: Benutzertest mit Studierenden
- zu 2: Test der Webanwendung mit mehreren Benutzern (bis zu 50)
- zu 3: Statistische Auswertung: Zählen der Kurs in moodle und Vergleich mit dem Veranstaltungsangebot

## Stakeholder

| Rolle | Kontakt | Erwartungshaltung |
| --- | --- | --- |
| Prof. Dr. Daniel Retkowitz (Dozent) | daniel.retkowitz@hs-niederrhein.de | --- |
| Tobias Jansen (Student) | Tobias.Jansen@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
| Henning Schilder (Student) | Henning.Schilder@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
| Jari Elfers (Student) | jari.elfers@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
| Aleks Adamovic (Student) | Aleks.Adamovic@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
| User (Student) | diverse | Erfolgreiche Nutzung der Anwendung |


# 2 Randbedingungen

Technische Vorgaben

- Programmiersprache: C#/TypeScript
- Framework: Angular
- IDE: Visual Studio 2017
- Zielumgebung: Plattformunabhängig (Webanwendung)
- Grafische Darstellung: Webbrowser

Organisatorische Vorgaben

- Zeitrahmen: Mitte Oktober 2017 bis Mitte Januar 2018 (drei Monate)
- Team: Gruppe aus vier Studenten
- Dokumentation: Pflichtenheft und Architekturdokumentation
- Präsentation: 30 Min. bestehend aus PP-Präs. und Poster
- Versionsverwaltungssystem: GitHub, Trello (nur intern)

# 3 Kontextabgrenzung

- siehe: #3_Kontextabgrenzung_Kontextdiagramm.pdf

![Kontextabgrenzung_Kontextdiagramm](#3_Kontextabgrenzung_Kontextdiagramm.pdf)

## Fachlicher Kontext

- siehe: #3_Fachlicher_Kontext_Frond-_Backend.pdf

## Technischer Kontext

- siehe: #3_Technischer Kontext_UML_Deployment_Diagramm.pdf

Beispielsweise UML Deployment-Diagramme mit den Kanälen zu
Nachbarsystemen, begleitet von einer Tabelle, die Kanäle auf
Ein-/Ausgaben abbildet.

**&lt;Diagramm oder Tabelle&gt;**

**&lt;optional: Erläuterung der externen technischen
Schnittstellen&gt;**

**&lt;Mapping fachliche auf technische Schnittstellen&gt;**

# 4 Lösungsstrategie

- Wir haben uns entschieden die Webanwendung („09-eLearningApp“) in der Programmiersprachen Java/Typescript zu entwickeln. Weiterhin haben wir uns entschieden VisualStudio als Entwicklungsumgebung zu nutzen.
- VisualStudio haben wir bereits in der Grundlagenveranstaltung kennen gelernt und intensiv genutzt, anfangs war geplant  ASP.NET Core MVC und das Entity Framework Core für unsere Entwicklung zu nutzen. Allerdings fiehl uns das Arbeiten damit sehr schwer.
- Gemeinsam haben wir uns dann entschieden Angular für die Entwicklung zu nutzen. Die Dokumentation zu Angular ist umfangreich und relativ leicht verständlich, weiterhin gab es seitens von Projektmitgliedern schon erste Erfahrungen mit Angular. 
- Die Zielumgebung soll plattformunabhängig sein, daher bietet sich Angular ebenfalls an. Die grafische Darstellung soll über einen Webbrowser realisiert werden. Das Pflichtenheft dient als Grundlage für den angestrebten Funktionsumfang, die vorhandenen Use-Cases unterstützen uns dabei die Funktionen umzusetzen. 
- Um die oben aufgeführten Qualitätsziele zu erreichen werden bei der Entwicklung stets umfangreiche Funktionstests durchgeführt, um mögliche Fehler schnell zu finden und zu eliminieren. 
- Die Bearbeitung des Projekts findet unter ständigem Austausch der Projektmitglieder statt. Zur Unterstützung der Kommunikation greifen wir auf das Versionsverwaltungssystem GitHub zurück. Die Entwicklung des Programmcodes wird hauptsächlich durch die Mitglieder mit dem höheren Verständnis für die Programmierung übernommen.
- Die anderen Mitglieder kümmern sich verstärkt um die Organisation und Dokumentation des Projektes.

# 5 Bausteinsicht

- siehe: #5_Bausteinsicht.pdf

Ebene-1
eLearning-App Whitebox-Sicht
• Zweck / Verantwortlichkeit: Gesamte eLearning Webanwendungen
• Schnittstelle(n): keine Nachbarsysteme (integrierte Datenbank)
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Log-In Whitebox-Sicht
• Zweck / Verantwortlichkeit: Ermöglicht den Zugang zur Anwendung 
• Schnittstelle(n): Modulwahl
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Modulwahl Whitebox-Sicht
• Zweck / Verantwortlichkeit: Dient der Auswahl der Studiengänge/Module
• Schnittstelle(n): Log-In / Abfragen (Kontrollfragen)
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Abfrage Whitebox-Sicht
• Zweck / Verantwortlichkeit: Dient der Durchführung der Abfragen (Kontrollfragen)
• Schnittstelle(n): Modulwahl / Fortschritt
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Fortschritt Whitebox-Sicht
• Zweck / Verantwortlichkeit: Ermöglicht den Benutzern die Überwachung Ihres Fortschritts
• Schnittstelle(n): Abfragen (Kontrollfragen)
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie


Hier folgen jetzt Erläuterungen zu Blackboxen der Ebene 1.
- | Log-In | Ermöglicht den Login in die Anwendung mit Benutzername und Passwort |
- | Modulwahl | Ermöglicht dem Benutzer die Auswahl von Kursen (Modulen), zuvor muss der Benutzer aber den Log-In durchführen |
- | Abfrage | Ermöglicht dem Benutzer die Durchführung der Abfragen (Kontrollfragen), zuvor muss der Benutzer einen Kurs(Modul) ausgewählt haben |
- | Fortschritt | Ermöglicht dem Benutzer eine Übersicht über seine bisherigen Fortschritte/Erfolge, Fortschritte/Erfolge werden nur erzeugt wenn der Benutzer Abfragen (Kontrollfragen) durchgeführt hat |

Hier folgen jetzt Erläuterungen zu Blackboxen der Ebene 2.
- | Modulauswahl | Nach erfolgreicher Studiengangwahl muss der Benutzer ein passendes Modul auswählen, darauf folgt die Möglichkeit der Abfragen (Kontrollfragen) |

# 6 Laufzeitsicht

- siehe: #6_Aktivitätsdiagramm_Benutzersicht.pdf
- siehe: #6_Aktivitätsdiagramm_Adminsicht.pdf

# 7 Verteilungssicht

- siehe: #7_Verteilungssicht.pdf

# 8 Querschnittliche Konzepte

- aus unserer Sicht nicht relevant, daher nicht bearbeitet

# 9 Entwurfsentscheidungen

- Da dieses Projekt doch eher einen relativ geringen Umfang besitzt, gibt es in dem Sinne keine teuren, großen oder riskanten Architektur- bzw. Entwurfsentscheidungen. Wichtige Entscheidungen wurden mit den uns zur Verfügung stehenden Mitteln bzw. den im Verlauf unseres Studiums angeeigneten Techniken abgebildet.  Im Abschnitt 4 befindet sich eine deutliche Beschreibung zu den grundlegenden strategischen Entscheidungen.

# 10 Qualitätsanforderungen

**Inhalt.**

Dieser Abschnitt enthält möglichst alle Qualitätsanforderungen als
Qualitätsbaum mit Szenarien. Die wichtigsten davon haben Sie bereits in
Abschnitt 1.2 (Qualitätsziele) hervorgehoben.

Nehmen Sie hier auch Qualitätsanforderungen geringerer Priorität auf,
deren Nichteinhaltung oder -erreichung geringe Risiken birgt.

**Motivation.**

Weil Qualitätsanforderungen die Architekturentscheidungen oft maßgeblich
beeinflussen, sollten Sie die für Ihre Stakeholder relevanten
Qualitätsanforderungen kennen, möglichst konkret und operationalisiert.

## Qualitätsbaum

siehe: # 9_Qualitätsanforderungen_Qualitätsbaum.pdf

## Qualitätsszenarien

**Inhalt.**

Konkretisierung der (in der Praxis oftmals vagen oder impliziten)
Qualitätsanforderungen durch (Qualitäts-)Szenarien.

Diese Szenarien beschreiben, was beim Eintreffen eines Stimulus auf ein
System in bestimmten Situationen geschieht.

Wesentlich für die meisten Softwarearchitekten sind zwei Arten von
Szenarien:

-   Nutzungsszenarien (auch genannt Anwendungs- oder
    Anwendungsfallszenarien) beschreiben, wie das System zur Laufzeit
    auf einen bestimmten Auslöser reagieren soll. Hierunter fallen auch
    Szenarien zur Beschreibung von Effizienz oder Performance. Beispiel:
    Das System beantwortet eine Benutzeranfrage innerhalb einer Sekunde.

-   Änderungsszenarien beschreiben eine Modifikation des Systems oder
    seiner unmittelbarer Umgebung. Beispiel: Eine zusätzliche
    Funktionalität wird implementiert oder die Anforderung an ein
    Qualitätsmerkmal ändert sich.

**Motivation.**

Szenarien operationalisieren Qualitätsanforderungen und machen deren
Erfüllung mess- oder entscheidbar.

Insbesondere wenn Sie die Qualität Ihrer Architektur mit Methoden wie
ATAM überprüfen wollen, bedürfen die in Abschnitt 1.2 genannten
Qualitätsziele einer weiteren Präzisierung bis auf die Ebene von
diskutierbaren und nachprüfbaren Szenarien.

**Form.**

Entweder tabellarisch oder als Freitext.
