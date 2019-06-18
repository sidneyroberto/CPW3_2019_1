import axios from 'axios';
import * as serviceConfig from '../utils/serviceUtils';

class ImagemService {

    pesquisarImagens(consulta) {
        consulta = consulta.toLowerCase().trim();
        const urlPesquisa =
            `${serviceConfig.URL_API}` +
            `key=${serviceConfig.CHAVE_API}` +
            `&q=${consulta}` +
            `&lang=${serviceConfig.LINGUA}` +
            `&image_type=${serviceConfig.TIPO_IMAGEM}`;

        return axios.get(urlPesquisa);
    }
}

export default ImagemService;