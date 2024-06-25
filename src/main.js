import App from './App.vue'
import { createApp } from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@fontsource/chakra-petch';
import '@fontsource-variable/inter';

const app = createApp(App);

app.use(Buefy);
app.mount('#app');
