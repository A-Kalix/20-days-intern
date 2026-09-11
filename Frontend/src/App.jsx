import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import IndicatorList from './pages/indicators/IndicatorList';

function Layout({ children }) { return <div className="flex h-screen bg-gray-50"><Sidebar /><div className="flex-1 flex flex-col overflow-hidden"><Header /><main className="flex-1 overflow-auto p-6">{children}</main></div></div>; }

export default function App() { return <BrowserRouter><Layout><Routes><Route path="/" element={<div>Dashboard</div>} /><Route path="/indicators" element={<IndicatorList />} /></Routes></Layout></BrowserRouter>; }