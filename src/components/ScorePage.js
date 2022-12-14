import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmount, handleScore } from '../redux/actions/actions'
import '../css/ScorePage.css'


const ScorePage = () => {
  const { score, question_amount } = useSelector((state) => state)
  const dispatch = useDispatch()
  const history = useNavigate()

  const handleHome = () => {
    dispatch(handleAmount(50))
    dispatch(handleScore(0))
    history('/')
  }

  let percentage = {score}/{question_amount} * 100

  let container = document.getElementById('animate')
  let emojis95AndUp = ['🥳', '🙌🏾', '🎉', '✨', '🔥', '🤘🏾', '🤩', '💖', '💩', '🐷', '🐸', '🎃', '🎾', '🌈', '🌻', '🥇', '🇭🇹']
  // let emojis80_94 = ['✨', '🤘🏾', '😁', '🧡', '🍀', '🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '🐝', '😻']
  // let emojis71_79 = ['😊', '🌸', '🤨', '🌹', '🦑', '🍁', '🐸', '🧬', '🍔', '🍣', '🍾', '🍦', '🏖️', '🐳' ]
  // let emojis60_70 = ['🙃', '🫣', '🫣', '🦖', '🦋', '💣', '🎊', '🍑', '🥦', '🍕', '🍺', '⚽', '🎾', '💙' ]
  // let emojislessThan60 = ['😬', '🤦🏾‍♀️', '👀', '🫠', '🐠', '🌈', '🐵', '🐻', '🐥', '🍉', '🍿', '🎂', '🏈', '💜' ]
  let circles = []

  if(percentage >= 95){
    for (let i = 0; i < 15; i++) {
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
      addCircle(i * 150, [10 + 0, 300], emojis95AndUp[Math.floor(Math.random() * emojis95AndUp.length)]);
    }
  }

  // if(percentage >= 80 && percentage < 94){
  //   for (let i = 0; i < 15; i++) {
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis80_94[Math.floor(Math.random() * emojis80_94.length)]);
  //   }
  // }

  // if(percentage >= 71 && percentage < 79){
  //   for (let i = 0; i < 15; i++) {
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis71_79[Math.floor(Math.random() * emojis71_79.length)]);
  //   }
  // }

  // if(percentage >= 60 && percentage < 70){
  //   for (let i = 0; i < 15; i++) {
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojis60_70[Math.floor(Math.random() * emojis60_70.length)]);
  //   }
  // }
  
  // if(percentage < 60){
  //   for (let i = 0; i < 15; i++) {
  //     addCircle(i * 150, [10 + 0, 300], emojislessThan60[Math.floor(Math.random() * emojislessThan60.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojislessThan60[Math.floor(Math.random() * emojislessThan60.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojislessThan60[Math.floor(Math.random() * emojislessThan60.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojislessThan60[Math.floor(Math.random() * emojislessThan60.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojislessThan60[Math.floor(Math.random() * emojislessThan60.length)]);
  //     addCircle(i * 150, [10 + 0, 300], emojislessThan60[Math.floor(Math.random() * emojislessThan60.length)]);
  //   }
  // }

  function addCircle(delay, range, color) {
    setTimeout(function() {
      var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
        x: -0.15 + Math.random() * 0.3,
        y: 1 + Math.random() * 1
      }, range);
      circles.push(c);
    }, delay);
  }
  
  function Circle(x, y, c, v, range) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.color = c;
    this.v = v;
    this.range = range;
    this.element = document.createElement('span');
    this.element.style.opacity = 0;
    this.element.style.position = 'absolute';
    this.element.style.fontSize = '26px';
    this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
    this.element.innerHTML = c;
    container.appendChild(this.element);
  
    this.update = function() {
      if (_this.y > 800) {
        _this.y = 80 + Math.random() * 4;
        _this.x = _this.range[0] + Math.random() * _this.range[1];
      }
      _this.y += _this.v.y;
      _this.x += _this.v.x;
      this.element.style.opacity = 1;
      this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
      // this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
      this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    };
  }
  
  function animate() {
    for (let i in circles) {
      circles[i].update();
    }
    requestAnimationFrame(animate);
  }
  
  animate();


  return (
    <Box mt={30}>
      <div id='all'>
        <div id='container'>
          <div id='animate'></div>
        </div>
      </div>
      <Typography variant='h3' fontWeight='bold' mb={3} id='final_text'>Final Score: {score}/{question_amount}</Typography>
      <Button onClick={handleHome} fullWidth variant='contained'>Home</Button>
      <div id='reference'>
        <p>modified version by</p>
        <a href='https://github.com/a-gbatie/Final-Quiz-App' target='_blank'>Ange Batie,</a><p> original by</p><a href='https://codepen.io/robertheiser/pen/NXrqXa' target='_blank'>Robert Heiser</a>
      </div>
    </Box>
  )
}

export default ScorePage;