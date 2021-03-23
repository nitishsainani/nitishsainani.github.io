export default function Icon(props) {
  return <i className={props.name} style={{margin: 5, ...props.style}} {...props}/>
}
