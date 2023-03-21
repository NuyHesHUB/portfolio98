import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import WindowsFrame from './WindowsFrame/WindowsFrame'
import {focusDeleted, blurDeleted, minimizeDeleted, maximizeDeleted, disabledDeleted,exitDeleted} from '../../store/actions/actions'
import deletedImage from '../../assets/dockbar-icon/Delete.png'
import deletedLimgage from '../../../src/assets/desktop-icon/Delete.png'
import cloud from '../../assets/cloud-img/windows_98_clouds.jpg'
import Matter from 'matter-js';

function Deleted({ deleted, onDeletedFocus, onDeletedBlur, onDeletedMinimize, onDeletedMaximize, onDeletedDisabled, onDeletedExit }) {
  
    useEffect(() => {
      window.addEventListener('click', deletedBlur);
      return () => window.removeEventListener('click', deletedBlur);
      // eslint-disable-next-line
    }, []);
  
    function deletedBlur(event) {
      if (!document.querySelector('#Deleted').contains(event.target) &&
        !document.querySelector('#deleted-button').contains(event.target)) {
        onDeletedBlur();
      } else { onDeletedFocus(); }
    }
    const splitWords = () => {
        const textNode = document.querySelector(".text");
        const text = textNode.textContent;
        const newDomElements = text.split(" ").map((text) => {
          const highlighted =
            text.startsWith(`"30under30"`) ||
            text.startsWith(`CTO`) ||
            text.startsWith(`Mythrill`);
          return `<span class="word ${
            highlighted ? "highlighted" : null
          }">${text}</span>`;
        });
        textNode.innerHTML = newDomElements.join("");
      };
      
      const renderCanvas = () => {
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Runner = Matter.Runner;
        const params = {
          isStatic: true,
          render: {
            fillStyle: "transparent"
          }
        };
        const canvasSize = {
          width: window.innerWidth,
          height: window.innerHeight
        };
        const engine = Engine.create({});
      
        const render = Render.create({
          element: document.body,
          engine: engine,
          options: {
            ...canvasSize,
            background: "transparent",
            wireframes: false
          }
        });
        const floor = Bodies.rectangle(
          canvasSize.width / 2,
          canvasSize.height,
          canvasSize.width,
          50,
          params
        );
        const wall1 = Bodies.rectangle(
          0,
          canvasSize.height / 2,
          50,
          canvasSize.height,
          params
        );
        const wall2 = Bodies.rectangle(
          canvasSize.width,
          canvasSize.height / 2,
          50,
          canvasSize.height,
          params
        );
        const top = Bodies.rectangle(
          canvasSize.width / 2,
          0,
          canvasSize.width,
          50,
          params
        );
        const wordElements = document.querySelectorAll(".word");
        const wordBodies = [...wordElements].map((elemRef) => {
          const width = elemRef.offsetWidth;
          const height = elemRef.offsetHeight;
      
          return {
            body: Matter.Bodies.rectangle(canvasSize.width / 2, 0, width, height, {
              render: {
                fillStyle: "transparent"
              }
            }),
            elem: elemRef,
            render() {
              const { x, y } = this.body.position;
              this.elem.style.top = `${y - 20}px`;
              this.elem.style.left = `${x - width / 2}px`;
              this.elem.style.transform = `rotate(${this.body.angle}rad)`;
            }
          };
        });
      
        const mouse = Matter.Mouse.create(document.body);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
          mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false
            }
          }
        });
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
      
        World.add(engine.world, [
          floor,
          ...wordBodies.map((box) => box.body),
          wall1,
          wall2,
          top,
          mouseConstraint
        ]);
        render.mouse = mouse;
        Runner.run(engine);
        Render.run(render);
      
        (function rerender() {
          wordBodies.forEach((element) => {
            element.render();
          });
          Matter.Engine.update(engine);
          requestAnimationFrame(rerender);
        })();
      };
      
      window.addEventListener("DOMContentLoaded", (event) => {
        splitWords();
        renderCanvas();
      });
  
    const displayContent =
      deleted.show ?
        <WindowsFrame
          id="Deleted"
          x="120"
          y="90"
          width="600"
          /* height="348" */
          img={deletedImage}
          title="Untitled - Deleted"
          blurred={deleted.blurred}
          showMenu={true}
          onMinimize={onDeletedMinimize}
          onMaximize={onDeletedMaximize}
          onDisabled={onDeletedDisabled}
          onExit={onDeletedExit}
          isMinimized={deleted.minimized}
          isMaximized={deleted.maximized}
          isDisabled={deleted.maximized}
          >
          <div className="Deleted">
              <div className='bg'>
                <div className='Deleted-bg' style={{backgroundImage: `url(${cloud})`}}>
                    <img src={deletedLimgage} alt="Icon"/>
                    <h3>Recycle Bin</h3>
                </div>
                    <ul className='line-list'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
              </div>
              <div className='ct'>
                <div class="text">
                    software developer with over 9 years of experience, I have developed a strong foundation in crafting innovative and efficient technology solutions. My passion for technology and entrepreneurship led me to co-found Mythrill, where I currently serve as the CTO. I am proud to be recognized as one of the "30under30" Armenians in Tech and am constantly driven to push boundaries and make a positive impact in the industry. When I'm not coding, I enjoy exploring my creative side through art, music, and nature
                </div>
              </div>
          </div>
        </WindowsFrame> : null;
  
    return displayContent;
  }
  
  const mapStateToProps = (state) => {
    return {
      deleted: state.deleted
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onDeletedBlur: () => dispatch(blurDeleted()),
      onDeletedFocus: () => dispatch(focusDeleted()),
      onDeletedMinimize: () => dispatch(minimizeDeleted()),
      onDeletedMaximize: () => dispatch(maximizeDeleted()),
      onDeletedDisabled: () => dispatch(disabledDeleted()),
      onDeletedExit: () => dispatch(exitDeleted()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Deleted);