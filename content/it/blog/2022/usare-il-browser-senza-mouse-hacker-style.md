---
title: Usare il browser senza mouse – Hacker Style
description: Tutorial su Vimium, un'estensione che permette di utilizzare il browser univocamente da tastiera, senza utilizzare il mouse.
author: Alberto Reineri

date: 2022-06-06T09:34:22+00:00
categories:
  - Tech
  - Web Dev

---
Passiamo molto, moltissimo tempo sul browser ormai, e usare il mouse per la navigazione può essere frustranete per noi sviluppatori&#8230; Ma è possibile farne a meno e muoversi solamente utilizzando la tastiera, come un vero hacker! Vediamo come si fa.

## Vimium Extension

Per prima cosa devi scaricare l'estensione <a href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb" target="_blank" rel="noreferrer noopener">Vimium</a>. Io uso Google Chrome, ma è presente anche per <a href="https://addons.mozilla.org/it/firefox/addon/vimium-ff/" target="_blank" rel="noreferrer noopener">Firefox</a> e <a href="https://apps.apple.com/us/app/vimari/id1480933944?mt=12" target="_blank" rel="noreferrer noopener">Safari</a> (se usi Brave o Edge non preoccuparti, puoi installare l'estensione per Google Chrome, funzionerà perfettamente perché questi browser condividono la stessa base).

Dopo averla installata potrete iniziare ad utilizzare il vostro browser direttamente dalla tasitera.

La base dei comandi è quella del software Vim, quindi se siete su Linux probabilmente vi troverete già a vostro agio, altrimenti non preoccupatevi, basterà qualche minuti di pratica per abbandonare il mouse per sempre!

Ecco i comandi principali per utilizzarlo:

## Navigare nella pagina corrente:

<pre class="wp-block-code"><code>?       mostra l'elenco dei comandi disponibili (molto utile all'inizio)
h       scroll verso sinistra
j       scroll verso il basso
k       scroll verso l'alto
l       scroll verso destra
gg      scroll in cima alla pagina
G       scroll in fondo alla pagina
d       scroll in basso di metà pagina
u       scroll in alto di metà pagina
f       apri un link nella tab corrente
F       apri link in nuova tab
r       ricarica
gs      visualizza codice sorgente</code></pre>

## Navigare in altre pagina:

<pre class="wp-block-code"><code>o       Apri URL
O       Apri URL in nuova tab
b       Apri preferiti
B       Apri preferiti in nuova tab</code></pre>

## Cronologia:

<pre class="wp-block-code"><code>H       Vai a pagina precedente
L       Vai a pagina successiva</code></pre>

## Manipolazione tabs:

<pre class="wp-block-code"><code>J, gT      Vai un tab verso sinistra
K, gt      Vai un tab verso destra
g0         Vai alla prima tab
g$         Vai all'ultima tab
t          Crea tab
x          Chiudi tab corrente
X          Riapri tab chiusa
T          Cerca fra le tab</code></pre>

Ecco qua, questi sono solamente i comandi principali, ne esistono altri che puoi leggere qua: <a href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb" target="_blank" rel="noreferrer noopener">https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb</a>

E questo è tutto! Non ti resta che provare ad utilizzarli e vedrai che in breve tempo potrai usare il browser totalmente in hacker style ?‍?

Come sempre _buon codice!_