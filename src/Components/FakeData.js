

import sqlInjImg from './images/SQL-Injection-Attack.png'
import sessionHi from './images/session_hijacking.png'
import cross from './images/xss.png'
import Phishing from './images/phishing.png'
import malwares from './images/malware.png'
import ddos from './images/ddos.png'


export   const cardDataArray = [
    {
      id:101,
      name: 'SQL Injection Attack',
      text: 'SQL injection is a type of cyberattack where malicious code is inserted into a web applications input fields.',
      image: sqlInjImg, 
    },
    {
      id:102,
      name: 'Cookie/Session Hijacking',
      text: 'Cookie/session hijacking is a cyberattack where an attacker steals a users session identifier or authentication cookie.',
      image: sessionHi, // Replace with the actual image URL
    },
    {
      id:103,
      name: 'Cross-Site-Scripting',
      text: 'It is a type of web vulnerability where attackers inject malicious scripts into webpages viewed by other users.',
      image: cross, // Replace with the actual image URL
    },
    {
      id:104,
      name: 'Phishing',
      text: 'Phishing is a cyberattack that involves tricking individuals into revealing sensitive information like passwords or financial details',
      image: Phishing, // Replace with the actual image URL
    },
    {
      id:105,
      name: 'Malwares',
      text: 'Malware is a cyberattack method where malicious software code is injected into legitimate applications or websites.',
      image: malwares, // Replace with the actual image URL
    },
    {
      id:106,
      name: 'Denial of service Attack/DDOS',
      text: '(DoS) attack is a malicious attempt to disrupt the normal functioning of a computer system or network.',
      image: ddos, // Replace with the actual image URL
    }
  ]; 

