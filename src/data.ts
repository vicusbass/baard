import type { ImageMetadata } from 'astro';
import aphelion from './assets/covers/aphelion.webp';
import dreamChaser from './assets/covers/dream-chaser.webp';
import malina from './assets/covers/malina.webp';
import melodiesOfAtonement from './assets/covers/melodies-of-atonement.webp';
import pitfalls from './assets/covers/pitfalls.webp';
import theCongregation from './assets/covers/the-congregation.webp';
import universalChaos from './assets/covers/universal-chaos.webp';
import winterThrice from './assets/covers/winter-thrice.webp';

export const spotifyArtist = 'https://open.spotify.com/artist/4lgrzShsg2FLA89UM2fdO5';

export interface Social {
  abbr: string;
  menuLabel: string;
  name: string;
  url: string;
}

export const socials: Social[] = [
  {
    abbr: 'IG',
    menuLabel: 'IG',
    name: 'Instagram',
    url: 'https://www.instagram.com/baardkolstadofficial/',
  },
  {
    abbr: 'YT',
    menuLabel: 'YT',
    name: 'YouTube',
    url: 'https://www.youtube.com/BaardKolstad',
  },
  {
    abbr: 'FB',
    menuLabel: 'FB',
    name: 'Facebook',
    url: 'https://www.facebook.com/BaardKolstadOfficial/',
  },
  {
    abbr: 'SP',
    menuLabel: 'SPOTIFY',
    name: 'Spotify',
    url: spotifyArtist,
  },
];

export interface Album {
  title: string;
  band: string;
  year: string;
  cover: ImageMetadata;
  url: string;
}

export const albums: Album[] = [
  {
    title: 'Melodies of Atonement',
    band: 'LEPROUS',
    year: '2024',
    cover: melodiesOfAtonement,
    url: spotifyArtist,
  },
  {
    title: 'Aphelion',
    band: 'LEPROUS',
    year: '2021',
    cover: aphelion,
    url: spotifyArtist,
  },
  {
    title: 'Pitfalls',
    band: 'LEPROUS',
    year: '2019',
    cover: pitfalls,
    url: spotifyArtist,
  },
  {
    title: 'Malina',
    band: 'LEPROUS',
    year: '2017',
    cover: malina,
    url: spotifyArtist,
  },
  {
    title: 'The Congregation',
    band: 'LEPROUS',
    year: '2015',
    cover: theCongregation,
    url: spotifyArtist,
  },
  {
    title: 'Dream Chaser',
    band: 'RENDEZVOUS POINT',
    year: '2024',
    cover: dreamChaser,
    url: spotifyArtist,
  },
  {
    title: 'Universal Chaos',
    band: 'RENDEZVOUS POINT',
    year: '2019',
    cover: universalChaos,
    url: spotifyArtist,
  },
  {
    title: 'Winter Thrice',
    band: 'BORKNAGAR',
    year: '2016',
    cover: winterThrice,
    url: spotifyArtist,
  },
];

export interface Show {
  date: string;
  year: string;
  venue: string;
  city: string;
  tag: 'LEPROUS' | 'CLINIC';
}

export const shows: Show[] = [
  { date: 'SEP 12', year: '2026', venue: 'Sentrum Scene', city: 'Oslo, Norway', tag: 'LEPROUS' },
  {
    date: 'SEP 18',
    year: '2026',
    venue: 'Huxleys Neue Welt',
    city: 'Berlin, Germany',
    tag: 'LEPROUS',
  },
  {
    date: 'OCT 02',
    year: '2026',
    venue: '013 Poppodium',
    city: 'Tilburg, Netherlands',
    tag: 'LEPROUS',
  },
  {
    date: 'OCT 14',
    year: '2026',
    venue: 'Drum City — solo clinic',
    city: 'Oslo, Norway',
    tag: 'CLINIC',
  },
  { date: 'NOV 07', year: '2026', venue: 'Electric Ballroom', city: 'London, UK', tag: 'LEPROUS' },
  {
    date: 'NOV 21',
    year: '2026',
    venue: 'Drumeo Studios — clinic',
    city: 'Abbotsford, Canada',
    tag: 'CLINIC',
  },
];
