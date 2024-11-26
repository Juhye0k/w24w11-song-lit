import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container title="주저하는 연인들을 위해" index="1"/>
      <Container title="가을밤에 든 생각" index="2"/>
      <Container title="뜨거운 여름밤은 가고 남은건 볼품없지만" index="3"/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>React 프로그래밍</h1>
  )
}

const Playlist=()=> {
  return (
      <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>
  )
}
const Container=(props)=> {
  return (
    <div className="container">
      <a href={`https://www.youtube.com/results?search_query=${props.title}`}>
        <img src={`https://picsum.photos/600/150?random=${props.index}`} alt="랜덤 이미지 1"/>
        <div class="song-title">{props.title}</div>
      </a>
    </div>
  )
}

export default App;