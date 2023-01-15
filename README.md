> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# Templates

## Wprowadzenie

React umożliwia budowanie stron z małych części – komponentów.

W tym projekcie zbudujemy kilka małych i dużych komponentów do wielokrotnego wykorzystania. Z takich komponentów możemy tworzyć elastyczne szablony, które pozwalają szybciej budować strony internetowe. 

### Małe komponenty

Na początek skupimy się na częściach składowych każdej strony, takich jak:

* nagłówek `<Header/>`
    * logo `<Logo/>`
    * nawigacja `<Nav/>`
* zawartość `<Content/>`
    * lewa kolumna `<ContentLeft/>`
    * prawa kolumna `<ContentRight/>`
    * właściwa treść `<ContentMain/>`
* stopka `<Footer/>`
    * prawa autorskie `<Copyrights/>`
    * menu `<Nav/>`

Każdy z tych elementów może zawierać inne mniejsze komponenty. To od Ciebie zależy, jak bardzo je podzielisz.

Możesz np. dla `<Content/>` przygotować kilka dodatkowych komponentów – do osadzenia wedle uznania w poszczególnych kolumnach, np.:

* wpis, tj. treść artykułu, `<Post/>` – przez props otrzymuje informacje o wpisie: tytuł, treść, autora, datę utworzenia
* kategoria, tj. grupa kilku wpisów, `<Category/>` – przez props otrzymuje tablicę zawierającą informacje o wpisach (podobnie jak w `<Menu/>` – rozwiązaniu realizowanym w zadaniach do tego modułu).
* galeria, lista zdjęć,  `<Gallery/>` – przez props otrzymuje informacje o zdjęciach w formie tablicy obiektów, które zawierają adres do zdjęcia, datę utworzenia i autora.

> Komponenty również można przekazywać przez props. Przykładowo do komponentu `<ContentMain/>` możemy przekazać komponent `<Gallery/>` w taki sposób: `<ContentMain content={ <Gallery/> }>`. Wówczas wewnątrz `<ContentMain/>` odwołamy się do przekazanego komponentu przez `this.props.content`, np.:

```jsx
const Gallery = props => {
    return (
        <section>
            {props.content}
        </section>
    )
}
```

### Duże komponenty

Duże komponenty to takie, które na podstawie mniejszych renderują całą stronę.

Możemy stworzyć ich kilka, np.:

* strona wpisu `<PagePost/>`
* strona z listą wpisów `<PageCategory/>`
* strona z galerią `<PageGallery/>`.


Te komponenty renderują mniejsze komponenty, które utworzyłeś w pierwszej kolejności.

Struktura komponentu `<PagePost/>` może prezentować się następująco:

```jsx
const post = {
    title: 'Hello React',
    body: 'Lorem ipsum....',
    author: 'Mirek Lorek',
    created: '2019-01-01 01:02:03'
}

const PagePost = () => {
    return (
        <>
            <Header />
            <Content
                main={ 
                    <Post data={ post } /> 
                }
            />
            <Footer/>
        </>
    );
}
```

Oczywiście poszczególne komponenty mogą wykorzystywać pozostałe komponenty, np.:

```jsx
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'regulamin', url: '/regulamin'},
];

const Footer = () => {
    return (
        <footer>
            <Copyrights />
            <Nav items={ menuItems } />
        </footer>
    )
}
```


## Implementacja

Początkowo utwórz komponenty, które mają wprowadzone dane „na sztywno” (bez przekazywania danych przez props) – aby zobaczyć, jak się one prezentują i jak wygląda struktura całej strony.

Potem zacznij przekazywać dane przez props, co zwiększy elastyczność komponentów i wygodę w ich ponownym wykorzystaniu. 

Jeśli teraz sprawi Ci to trudność, to nie przejmuj się. Ten temat będziemy jeszcze omawiać i ćwiczyć w następnych materiałach.

Postaraj się jednak wstępnie ostylować komponenty za pomocą atrybutu `style` i obiektów do niego przekazanych.

Możesz to zrobić przez przekazanie odpowiednich informacje przez props, np.:

```jsx
<div style={ this.props.styles.row } />
```

Tutaj dobrym pomysłem będzie zdefiniowanie domyślnych wartości propsów za pomocą `defaultProps` lub bezpośrednio – przez przypisanie wartości domyślnych do odbieranych w komponencie propsów.

Postaraj się również wszystkie komponenty umieścić w osobnych plikach w katalogu `components` i importować je oraz eksportować w odpowiednich miejscach.

### Webpack

Pamiętaj, że webpack musi być cały czas uruchomiony, aby kod JSX mógł być transpilowany do JS. Dzięki temu będziesz widzieć efekty swojej pracy.

> **Uwaga!** Nie używaj plików graficznych w tym projekcie, ponieważ [konfiguracja webpacka](https://www.robinwieruch.de/webpack-images) nie została do tego przygotowana i przy próbie ich wykorzystania pojawią się błędy.

## Podsumowanie

To zadanie umożliwi Ci przećwiczenie budowania komponentów, co jest niezbędne przy pracy z Reactem. 

Wykorzystuj naprzemiennie formę klasową i funkcyjną komponentów, aby obie były dla Ciebie zrozumiałe.

Zwróć uwagę na to, jak wygodnie można wielokrotnie wykorzystywać małe komponenty. Zazwyczaj im są mniejsze, tym łatwiej je zastosować w wielu miejscach.


&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
