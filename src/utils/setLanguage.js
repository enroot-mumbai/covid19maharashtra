import React from 'react';
import languageLabels from './languagelabels.json'

let language = window.localStorage.getItem('language');
// Parse stored json or if none return initialValue
language = language ? JSON.parse(language) : 'en';

export const selectedLanguage = languageLabels[language];
