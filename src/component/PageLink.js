const PageLink = ({id, herf, text, itemClass}) => {
    return (
        <li key={id}>
            <a href={herf} className={itemClass}> {text} </a>
        </li>
    )
}
export default PageLink;