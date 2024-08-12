// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import Countries from './Component/Countries'; // Import the Countries component
import Lorraine from './Component/Lorraine';
import CountryDetail from './Component/CountryDetail'; // Import the CountryDetail component
import Ratatouille from './Component/Ratatouille';
import ItalianRecipes from './Component/ItalianRecipes';
import FrenchRecipes from './Component/FrenchRecipes';
import KoreanRecipes from './Component/KoreanRecipes';
import JapanRecipes from './Component/JapanRecipes';
import ChineseRecipes from './Component/ChineseRecipes';
import IndianRecipes from './Component/IndianRecipes';
import CremeBrulee from './Component/CremeBrulee';
import Arancini from './Component/Arancini';
import Tiramisu from './Component/Tiramisu';
import Branzino from './Component/Branzino';
import Tteokbokki from './Component/Tteokbokki';
import Dakgalbi from './Component/Dakgalbi';
import Mochi from './Component/Mochi';
import Soba from './Component/Soba';
import Donburi from './Component/Donburi';
import Dorayaki from './Component/Dorayaki';
import Hargow from './Component/Hargow';
import Kungpao from './Component/Kungpao';
import Jasminetea from './Component/Jasminetea';
import Paneer from './Component/Paneer';
import Biryani from './Component/Biryani';
import Thandai from './Component/Thandai';
import Contact from './Component/Contact';
import AdminPanel from './Component/AdminPanel'; // Import the AdminPanel component


function App() {
  return (
    <Router>
      <NavBar /> {/* NavBar will be present on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/lorraine" element={<Lorraine />} />
        <Route path="/countries/:id" element={<CountryDetail />} /> {/* Dynamic route for country details */}
        <Route path="/ratatouille" element={<Ratatouille />}/>
        <Route path="/italianrecipes" element={<ItalianRecipes />}/>
        <Route path="/frenchrecipes" element={<FrenchRecipes/>}/>
        <Route path="/koreanrecipes" element={<KoreanRecipes/>}/>
        <Route path="/japanrecipes" element={<JapanRecipes/>}/>
        <Route path="/indianrecipes" element={<IndianRecipes/>}/>
        <Route path="/chineserecipes" element={<ChineseRecipes/>}/>
        <Route path="/cremebrulee" element={<CremeBrulee/>}/>
        <Route path="/arancini" element={<Arancini/>}/>
        <Route path="/tiramisu" element={<Tiramisu/>}/>
        <Route path="/branzino" element={<Branzino/>}/>
        <Route path="/tteobokki" element={<Tteokbokki/>}/>
        <Route path="/dakgalbi" element={<Dakgalbi/>}/>
        <Route path="/mochi" element={<Mochi/>}/>
        <Route path="/soba" element={<Soba/>}/>
        <Route path="/donburi" element={<Donburi/>}/>
        <Route path="/dorayaki" element={<Dorayaki/>}/>
        <Route path="/hargow" element={<Hargow/>}/>
        <Route path="/kungpao" element={<Kungpao/>}/>
        <Route path="/jasminetea" element={<Jasminetea/>}/>
        <Route path="/paneer" element={<Paneer/>}/>
        <Route path="/biryani" element={<Biryani/>}/>
        <Route path="/thandai" element={<Thandai/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<AdminPanel />} /> 

      </Routes>
    </Router>
  );
}

export default App;
