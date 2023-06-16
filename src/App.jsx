import { useTranslation } from 'react-i18next';

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  }

  return (
    <>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </select>

      <p>{t('welcome')}</p>
    </>
  );
}

export default App
