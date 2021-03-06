import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import MapMakerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMaps(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMakerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas Crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Belo Horizonte</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map 
                center={[-20.6665538,-43.7812763]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
               
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>
 
            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMaps;