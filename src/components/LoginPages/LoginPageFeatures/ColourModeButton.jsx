function ColourModeButton(props) {

    return (
        <button className="dark-mode-toggle" onClick={props.colourTheme} title="Toggle Dark Mode">
        {props.colourThemeSymbol}
        </button>
    );
}

export default ColourModeButton;