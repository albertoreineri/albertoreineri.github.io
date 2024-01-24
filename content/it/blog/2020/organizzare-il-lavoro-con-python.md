---
title: Organizzare il lavoro con Python
description: "Ho creato un semplice script per automatizzare operazioni ricorrenti con Python e Selenium"
author: Alberto Reineri
date: 2020-01-26T21:46:00+00:00
categories:
  - Personal

---
Da qualche tempo sto sviluppando **piccoli progettini in Python**. Non per lavoro, ma perché nella **community degli sviluppatori** online se ne parla molto spesso e sembra che questo linguaggio sia veramente fantastico.

Così ho deciso di dedicarci qualche oretta alla settimana, in modo da avere un’**infarinatura generale** casomai dovessi realizzare qualcosa in questo linguaggio in futuro.

Mentre studiavo e sviluppavo, mi è venuta in mente un’idea per un **piccolo software realizzabile** molto semplicemente proprio **con Python.**

**Tutte le mattine** quando inizio a lavorare **lancio una serie di software** e pagine web, sempre le stesse, tutti i giorni…

Così ho pensato di **automatizzare questo passaggio**, creando uno script che mi permetta di organizzarmi il computer appena acceso, aprendo tutto ciò di cui ho bisogno con un solo click.

## Aprire browser web con Python

Per prima cosa apro **google chrome** (o Microsoft Edge, dalla nuova versione è veramente migliorato).

Per prima cosa occorre importare il modulo _webbrowser_

<pre class="wp-block-code"><code>import webbrowser</code></pre>

Dopodiché è sufficiente indicare quali siti vogliamo visualizzare. Io per esempio apro **Gmail** e poi Google **Calendar** e Google **Keep** in due tab separate, in questo modo:

<pre class="wp-block-code"><code># Apro una nuova finestra del browser
webbrowser.open_new("https://mail.google.com/mail/u/0/#inbox")

# Apro url in nuovo tab
webbrowser.open_new_tab("https://keep.google.com/u/0/#home")
webbrowser.open_new_tab("https://calendar.google.com/calendar/r")</code></pre>

E’ anche possibile raggruppare gli url in variabili da richiamare successivamente, in questo modo:

<pre class="wp-block-code"><code># Variabili
website1 = "https://mail.google.com/mail/u/0/#inbox"
website2 = "https://calendar.google.com/calendar/r"
website3 = "https://keep.google.com/u/0/#home"

# Apro una nuova finestra del browser
webbrowser.open_new(website1)

# Apro url in nuovo tab
webbrowser.open_new_tab(website2)
webbrowser.open_new_tab(website3)
</code></pre>

In questo modo il codice è più semplice da capire e più pulito.

## Aprire software esterni con Python

Oltre al browser solitamente apro anche alcuni software. Uno in particolare è **XAMPP**, per poter lavorare comodamente in locale con i miei progetti in **PHP**.

Per aprire un software con **Python** è necessario importare il modulo _os_ in questo modo:

<pre class="wp-block-code"><code>import os</code></pre>

E successivamente richiamare il percorso nel quale risiede il file eseguibile del programma.

Io lavoro su Windows quindi sarà un file .exe

Ecco il codice:

<pre class="wp-block-code"><code>path = "C:/xampp/xampp-control.exe"
os.system(path)</code></pre>

## Aprire una cartella con Python

Infine voglio aprire anche la cartella _htdocs_, nella quale risiedono tutti i miei progetti. Per questa operazione utilizzeremo sempre il modulo os, quindi non sarà più necessario importarlo.

Basterà indicare il percorso della cartella e utilizzare il metodo _startfile_, in questo modo:

<pre class="wp-block-code"><code>path = "C:/xampp/htdocs"
path = os.path.realpath(path)
os.startfile(path)</code></pre>

## Nascondere la console di Python

Questo è lo script. Ma c’è ancora una cosa che non mi piace: **la console di python che rimane aperta** sotto i software appena lanciati.

Fortunatamente si può nascondere in maniera molto semplice, basta inserire il seguente codice per **Windows**:

<pre class="wp-block-code"><code># Nascondere python console
import win32gui, win32con

The_program_to_hide = win32gui.GetForegroundWindow()
win32gui.ShowWindow(The_program_to_hide , win32con.SW_HIDE)</code></pre>

Ecco qua, lo script è terminato.

Se volete poi lanciarlo semplicemente cliccando su un’icona sarà sufficiente trasformarlo in .exe tramite pyinstaller.

Per fare ciò installate pyinstaller sul pc e poi lanciate questo comando da terminale:

<pre class="wp-block-code"><code>pyinstaller nomefile.py</code></pre>

In questo modo potrete avere un link sul desktop che lancerà il vostro script, che aprirà tutti i software necessari per realizzare i vostri lavori.

Spero che questo articolo possa esserti stato utile. Se hai consigli o suggerimenti per migliorarlo o eventuali bug da segnalare fammelo sapere nei commenti!

### Codice completo:

<pre class="wp-block-code"><code>import win32gui, win32con # Nascondere python console
import webbrowser #Aprire browser
import os #Aprire Software e Cartelle

# Nascondere python console
The_program_to_hide = win32gui.GetForegroundWindow()
win32gui.ShowWindow(The_program_to_hide , win32con.SW_HIDE)


#Aprire browser
# Variabili
website1 = "https://mail.google.com/mail/u/0/#inbox"
website2 = "https://calendar.google.com/calendar/r"
website3 = "https://keep.google.com/u/0/#home"

# Apro una nuova finestra del browser
webbrowser.open_new(website1)

# Apro url in nuovo tab
webbrowser.open_new_tab(website2)
webbrowser.open_new_tab(website3)


#Aprire Cartella
path = "C:/xampp/htdocs"
path = os.path.realpath(path)
os.startfile(path)

#Aprire Software
xamppPath= "C:/xampp/xampp-control.exe"
os.system(xamppPath)

</code></pre>