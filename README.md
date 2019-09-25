# Basis-Template für einen Alexa Skill für das Hackerschool-Event @sipgate

## Voraussetzungen
- npm

## Vorbereitung

1. Falls noch nicht vorhanden, installiere _ask-cli_:

       sudo npm install --global ask-cli

2. Konfiguriere _ask_:

       ask init
   
   Folge den Anweisungen um deinen Amazon Developer- und AWS-Account zu verbinden (Um AWS-Credentials für _ask_ zu erstellen, gehe nach der Anleitung vor, die [hier](https://developer.amazon.com/de/docs/smapi/manage-credentials-with-ask-cli.html#create-aws-credentials) zu finden ist)
   
3. Passe die Region für dein AWS-Profil an:

       echo region=eu-west-1 | tee -a ~/.aws/credentials
       
   Die AWS-Lambda-Funktion, die von deinem Skill aufgerufen wird, soll in Irland (Region EU-West-1) gehostet werden.
   
Damit sind die allgemeinen Einstellungen abgeschlossen.

## Los geht's mit deinem eigenen Skill

Um dir den Einstieg zu erleichtern, klone dieses Repository und wechsle in das Verzeichnis:

    git clone https://github.com/ironmaya/hackerschool.git && cd hackerschool

Schon jetzt hast du einen voll funktionfähigen Alexa Skill. Um ihn zu deployen musst du nur noch einige Meta-Daten eintragen.

### Skill-Manifest

In der Datei `skill.json` musst du die Platzhalter mit den spitzen Klammern ersetzten:

```json
{
  "manifest": {
    "publishingInformation": {
      "locales": {
        "de-DE": {
          "summary": "<KURZBESCHREIBUNG>",
          "examplePhrases": [
            "<BEISPIEL-AUFRUFE>"
          ],
          "name": "<SKILL-NAME>",
          "description": "<BESCHREIBUNG>"
        }
      },
      "isAvailableWorldwide": true,
      "category": "<KATEGORIE>",
      "distributionCountries": []
    },
    "apis": {
      "custom": {
        "endpoint": {
          "sourceDir": "lambda/custom",
          "uri": "<NAME-FUER-LAMBDA-FUNKTION>"
        }
      }
    },
    "manifestVersion": "1.0"
  }
}
```

<table>
<tr>
<th>Schlüssel</th>
<th>Bedeutung</th>
<th>Beispiel</th>
</tr>
<tr>
<td><code>summary</code></td>
<td>Eine Kurzzusammenfassung deines Skills, die im Store angezeigt wird</td>
<td><code>"Mein erster Alexa-Skill"</code></td>
</tr>
<tr>
<td><code>examplePhrases</code></td>
<td>Eine Liste von Beispiel-Aufrufen deines Skills, die im Store angezeigt werden</td>
<td><code>["Alexa, öffne hackerschool",<br />"Alexa, sag hackerschool hallo"]</code></td>
</tr>
<tr>
<td><code>name</code></td>
<td>Der Name deines Skills (nicht zu verwechseln mit dem <code>invocationName</code>, dem <i>Aufruf-Namen</i> der bestimmt, wie der Skill aufgerufen werden kann)</td>
<td><code>"hackerschool-skill"</code></td>
</tr>
<tr>
<td><code>description</code></td>
<td>Eine Beschreibung deines Skills, die im Store angezeigt wird</td>
<td><code>"Diesen Skill haben ich bei der Hackerschool gebaut. Wenn man ihn begrüßt, grüßt er zurück."</code></td>
</tr>
<tr>
<td><code>category</code></td>
<td>Die Kategorie, zu der dein Skill gehört (<b>Achtung:</b> hier sind nur bestimmte Werte erlaubt, siehe <a href="https://developer.amazon.com/de/docs/smapi/skill-manifest.html#category-enum">Dokumentation</a>)</td>
<td><code>"GAME"</code></td>
</tr>
<tr>
<td><code>uri</code></td>
<td>In unserem Fall schlicht ein Name für die Lambda-Funktion</td>
<td><code>"custom-hackerschool"</code></td>
</tr>
</table>

Zuletzt musst du noch dem Sprachmodell beibringen, auf welchen Namen (_invocation name_) dein Skill hören soll.

### Invocation Name

In der Datei `/models/de-DE.json` musst du lediglich in Zeile 4 den `invocationName` eintragen. Achte darauf, dass der Name, nach deutschen Ausspracheregeln möglichst so klingt, wie du ihn sagen willst.

Damit ist der Skill fertig zum Deployen.

### Deployment

Um nun deinen Skill zu deployen, also die Lambda-Funktion bei AWS hochzuladen und den Skill in die Alexa-Cloud, musst du folgenden Befehl ausführen:

       ask deploy

Das dauert dann einen Moment, und wenn alles gut läuft, steht am Ende auf der Konsole

       Your skill is now deployed and enabled in the development stage. Try simulate your Alexa skill skill using "ask dialog" command.

Danach kannst du mit dem Befehl

       ask dialog --locale de-DE

zum Testen deines Skills ein Gespräch mit Alexa über die Kommandozeile beginnen. Alternativ kann du natürlich auch mit einem Echo-Gerät testen, das im gleichen Amazon Account angemeldet ist.

Herzlichen Glückwunsch! Wenn du alles richtig gemacht hast, ist dein erster Alexa Skill nun einsatzbereit. Sag doch mal: "Alexa, sag \<_InvocationName deines Skills_> hallo"

## Skill verändern

//TODO
