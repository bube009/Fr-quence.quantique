import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.votre_entreprise.frequencequantique', // Remplacez par un identifiant unique (ex: com.monapp.frequence)
  appName: 'Fréquence Quantique',
  webDir: 'www', // Répertoire où seront stockés les fichiers de votre application web construite
  bundledWebRuntime: false // Généralement false pour les applications Ionic/Angular
};

export default config;
