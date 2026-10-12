# Linkprüfung und Pflegehinweise

Prüfdatum: **12. Oktober 2026**.

## Aussagekraft der Prüfung

Geprüft wurden die Links der bisherigen README auf Erreichbarkeit und Weiterleitungen. Bei auffälligen Ergebnissen wurden zusätzlich Webabrufe und verfügbare Projektinformationen herangezogen. Neue offizielle Ressourcen wurden aus IOTA-Dokumentation und IOTA-Veröffentlichungen übernommen.

HTTP 200 belegt nur eine erreichbare Website. Wallet-Verbindungen, Swaps, Einzahlungen, Mainnet-Verträge und Transaktionen wurden nicht getestet. Ein aktueller IOTA-Produktivbetrieb ist deshalb für die vollständige Projektliste nicht bestätigt. X-Beiträge dienen als historische Ankündigungen und nicht als Nachweis eines heutigen Betriebs.

HTTP 403 kann durch Bot-Schutz entstehen. HTTP 5xx und fehlgeschlagene Abrufe können vorübergehend sein und belegen keine dauerhafte Projekteinstellung. Solche Einträge wurden aus der Hauptliste in dieses Prüfprotokoll verschoben, sofern keine belastbare aktuelle Alternative vorlag.

## Aus der Hauptliste entfernte oder zurückgestellte Links

| Projekt / URL | Beobachtung | Änderung |
| --- | --- | --- |
| Realize: `https://realize.finance/` | Weiterleitung zu einer Domain-Verkaufsseite auf expireddomains.com. | Aus den angekündigten dApps entfernt; die Domain ist kein aktueller Projekteinstieg. |
| ApeDAO: `https://apedao.io/` | Automatisierter Abruf fehlgeschlagen; Webabruf mit HTTP 502. | Zurückgestellt, bis Website und IOTA-Integration erneut bestätigt sind. |
| IOTA Spam: `https://iotaspam.io/` | Automatisierter Abruf fehlgeschlagen; Webabruf mit HTTP 502. | Zurückgestellt. |
| Vectra: `https://vectramarket.com/` | HTTP 502; gleichzeitig unter laufenden und kommenden dApps gelistet. | Beide Einträge aus der Hauptliste entfernt; erneute Prüfung erforderlich. |
| Transaction Origin Visualizer: `https://iota-transaction-origin-visualizer-448150412424.us-west1.run.app/` | HTTP 500. | Zurückgestellt; erreichbare IOTA-Tools-Visualisierung bleibt in der Hauptliste. |
| Trust-Framework-Demo: `http://demo.iota.org/` | Kein erfolgreicher Abruf. | Demo entfernt; offizielle Produkt- und Hintergrundseiten bleiben erhalten. |
| RepStation: `https://repstation.xyz/` | Kein erfolgreicher Abruf. | Beide Wiederholungen aus der Hauptliste entfernt; aktueller Betrieb offen. |
| Auvo: `https://auvo.io/` | Website kündigt Rückkehr nach einer Umstrukturierung an. | Als pausiert zurückgestellt; keine aktive Anwendung behauptet. |
| VeriPura Core: `https://core.veripura.com/login` | HTTP 404 im HTTP-Check; Webabruf zeigt nur den Seitentitel. | Unklaren Login-Endpunkt entfernt; VeriPura-Hauptseite bleibt erhalten. |
| Etospheres: `https://etospheres.com/` | DNS-Auflösung im HTTP-Check fehlgeschlagen, Webabruf mit HTTP 502; bisheriger Markdown-Link war fehlerhaft verschachtelt. | Zurückgestellt; aktuelle IOTA-Anwendung offen. |
| Etospheres: `https://x.com/ETOSPHERES` | HTTP 404 im HTTP-Check. | Entfernt; ein fehlender Social-Media-Link belegt keine Projekteinstellung. |
| IOTA Raffle: `https://x.com/teunvw5/status/1917567987273421140` | HTTP 404 im HTTP-Check. | Nur den alten Thread entfernt; die erreichbare Anwendung bleibt erhalten. |
| StarfishOneBot: `https://t.co/OASk3ZWDT7` | Zunächst als Telegram-Weiterleitung erkannt; Abschlussprüfung mit Timeout bzw. SSL-Fehler, Webabruf fehlgeschlagen. | Kurzlink entfernt; Projektankündigung beibehalten. |
| TWIN-Pakete: `https://twindev.org/docs/pkgs` | HTTP 404; Webindex enthält noch die alte Paketübersicht. | Durch die aktuelle Paketübersicht unter `/docs/development/pkgs` ersetzt. |

## Beibehaltene Links mit Einschränkungen

| Link | Beobachtung / Einordnung |
| --- | --- |
| [HoudiniSwap](https://houdiniswap.com/) | HTTP 403; manuelle Prüfung der Anwendung und IOTA-Unterstützung erforderlich. |
| [Cyberperp](https://rebased.cyberperp.io/trade) | HTTP 402; aktueller Betrieb nicht bestätigt. |
| [Cyberglow-Artikel](https://medium.com/@Cyberglowdex/cyberglow-the-infrastructure-iota-deserves-no-hype-no-rush-under-construction-614436509a20) | HTTP 403; als Ankündigung eingeordnet. |
| [IOTA dApp Kit auf npm](https://www.npmjs.com/package/@iota/dapp-kit) | HTTP 403; nicht automatisch als defekt eingestuft. dApp Kit ist kein Ersatz für die gesamte SDK-Dokumentation. |
| [Orobo](https://orobo.tech/) | HTTP 403; Projektwebsite beibehalten, automatisierter Zugriff eingeschränkt. |
| [IOTA Playground](https://iotaplay.app/) | DNS-Auflösung im aktuellen HTTP-Check fehlgeschlagen; Webindex enthält eine zwei Monate alte Seite. Heutige Verfügbarkeit nicht bestätigt; in den manuellen Prüfbereich verschoben. |
| [IOTA Move für VS Code](https://marketplace.visualstudio.com/items?itemName=iotaledger.iota-move) | SSL-Fehler beim HTTP-Check; Webabruf der Marketplace-Seite erfolgreich. |
| [Lost Crusader](https://lostcrusader.xyz/) | Alte HTTP-/www-Adresse leitet auf die erreichbare HTTPS-Hauptseite weiter. Die Roadmap führt die Mainnet-Integration noch als laufend; Abschluss nicht bestätigt. |

## Korrekturen

- Fehlendes `https://` bei DLT.GREEN Analytics, IOTA Guru, IOTA Names, Turing Certs Verifier, ObjectID Oracle und der Oracle-Dokumentation ergänzt.
- LiquidLink Bridge von HTTP auf HTTPS umgestellt.
- Lost Crusader auf das erreichbare Weiterleitungsziel `https://lostcrusader.xyz/` umgestellt.
- `emcd.io/crypto-wallet/` durch das Weiterleitungsziel `coinhold.io/crypto-wallet/` ersetzt. Aktuelle IOTA-Unterstützung bleibt beim Anbieter zu prüfen.
- `nakkitok.ddns.net` durch `nakkitok.com` ersetzt.
- `www.iota.guru` durch das Mainnet-Ziel `mainnet.iota.guru` ersetzt.
- `turingcerts.com` durch das erreichbare Weiterleitungsziel `www.turingspace.co` ersetzt.
- Alte TWIN-Paketübersicht durch [aktuelle Entwicklerpakete](https://twindev.org/docs/development/pkgs) ersetzt.
- `iotalabs.io` entfernt, da der Link zu `www.iota.org` weiterleitete; IOTA ist im Einstieg verlinkt.
- Duplikate bei IOTA Gives, LiquidLink, ObjectID, IOTA Staking, Goldsky und IOTARoyale zusammengeführt.
- Fehlerhafte Nummerierung durch Aufzählungen ersetzt; Tippfehler und Linkbeschriftungen korrigiert.
- Pauschale Aussage zur Ledger-Kompatibilität aller Wallets durch einen Hinweis auf geräte- und walletabhängige Unterstützung ersetzt.
- Testnet, Staging, Ankündigungen und reine Anwendungsberichte von den übrigen Ressourcen getrennt.
- Veraltete „soon“-Einordnung von ADAPT durch den [offiziellen Fortschrittsbericht Q2 2026](https://blog.iota.org/update-q2-2026/) ersetzt.

## Ergänzte Ressourcen

- [IOTA Registry](https://iota-registry.org/).
- [Offizieller Ressourcenüberblick zum Rebased-Start](https://blog.iota.org/builders-welcome-rebase-complete/).
- [Wallet-Anleitung](https://docs.iota.org/users/iota-wallet/getting-started) und [Ledger-Anleitung](https://docs.iota.org/users/iota-wallet/how-to/import/ledger).
- [IOTA EVM Explorer](https://explorer.evm.iota.org/).
- Full-Node-, API-, CLI-, GraphQL-, Gas-Station- und Identity-Dokumentation sowie die IOTA-Move-Erweiterung für VS Code.
- [Pyth Pro auf IOTA](https://blog.iota.org/iota-connects-pyth-pro/), einschließlich des Hinweises auf die abgeschlossene Pyth-Core-Migrationsfrist.
- [TWIN](https://www.twin.org/) und [TLIP](https://www.tlip.io/), verlinkt aus dem offiziellen Fortschrittsbericht.
- [Starfish-Mainnet-Upgrade](https://blog.iota.org/starfish-mainnet-release/) und [Fortschrittsbericht Q2 2026](https://blog.iota.org/update-q2-2026/).
- [Offizieller Bericht zu Ökosystem-Integrationen](https://blog.iota.org/q2-2025-progress-report/) als Quelle für MSafe, Zodia Custody, Goldsky, Blockberry und Lukka. Der Bericht bestätigt die damalige Integration, nicht automatisch deren heutigen Betrieb.
