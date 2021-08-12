const AnimeCard = props => {
    return (
        <div className="border border-gray-600 relative overflow-hidden rounded-xl">
            <img className="w-full" src={props.img} />
            <div className="absolute h-full bg-black bg-opacity-30 top-0 flex items-end p-4 left-0 rounded-xl">
                <p>{props.blajfkdlsgjl}</p>
            </div>
        </div>
    )
}

export default AnimeCard