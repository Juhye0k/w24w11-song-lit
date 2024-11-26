import './App.css';
import Container from "./Container.js"
const App=()=> {
  const songs = [
    {
      id: 1,
      title: "주저하는 연인들을 위해",
      singer: "잔나비",
      rating: 5,
      lyrics: `그러다 밤이 찾아오면 우리 둘만의 빛을 새겨요`,
    },
    {
      id: 2,
      title: "가을밤에 든 생각",
      singer: "잔나비",
      rating: 3,
      lyrics: `머나먼 별빛 저 별에서도 노랠 부르는 사랑 살겠지`,
    },
    {
      id: 3,
      title: "뜨거운 여름밤은 가고 남은건 볼품없지만",
      singer: "잔나비",
      rating: 3,
      lyrics: `그땐 난 어떤 맘이었길래 내 모든 걸 주고도 웃을 수 있었나`,
    },
  ]

  return (
    <div>
      <Header/>
      <Playlist title="프로그래밍하면서 듣고 싶은 노래"
      listSong={songs}/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>React 프로그래밍</h1>
  )
}

const Playlist=(props)=> {
  return (
      <div className="playlist">
        <div className='playlist'>
          <div className="playlist">{props.title}</div>
          {
            props.listSong.map((song)=>(
              <Container key={song.id} song={song}/>
            ))
          }
        </div>
      </div>
  )
}


export default App;