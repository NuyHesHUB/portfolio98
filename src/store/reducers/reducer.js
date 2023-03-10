import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showStart: false,
  showModal: false,
  about: {
    show: false,
    blurred: false,
    minimized: false
  },
  notepad: {
    show: false,
    blurred: false,
    minimized: false
  },
  resume: {
    show: false,
    blurred: false,
    minimized: false
  },
  shutDown: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHUT_DOWN:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        resume:{
          ...state.resume
        },
        shutDown: true
      }

    /*----------------------------------------*\
                actionTypes START
    \*----------------------------------------*/

    case actionTypes.START_BUTTON_CLICKED:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          ...state.notepad,
          blurred: true
        },
        resume: {
          ...state.resume,
          blurred: true
        },
        showStart: !state.showStart
      }

    case actionTypes.START_MENU_BLUR:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        resume: {
          ...state.resume
        },
        showStart: false
      }

    /*----------------------------------------*\
                actionTypes OPEN
    \*----------------------------------------*/

    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          ...state.notepad
        },
        showModal: true,
        resume: {
          ...state.resume,
          blurred: true
        }
      }

    case actionTypes.OPEN_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          show: true,
          blurred: false,
          minimized: false
        },
        resume: {
          ...state.resume,
          blurred: true
        }
      }

    case actionTypes.OPEN_ABOUT:
      return {
        ...state,
        about: {
          show: true,
          blurred: false,
          minimized: false
        },
        notepad: {
          ...state.notepad,
          blurred: true
        },
        resume: {
          ...state.resume,
          blurred: true
        }
      }

      case actionTypes.OPEN_RESUME:
        return {
          ...state,
          about: {
            ...state.about,
            blurred: true,
          },
          notepad: {
            ...state.notepad,
            blurred: true
          },
          resume: {
            show: true,
            blurred: false,
            minimized: false
          }
        }

    /*----------------------------------------*\
                actionTypes FOCUS
    \*----------------------------------------*/

    case actionTypes.FOCUS_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          blurred: false
        },
        resume: {
          ...state.resume
        }
      }

    case actionTypes.FOCUS_ABOUT: {
      return {
        ...state,
        about: {
          ...state.about,
          blurred: false
        },
        notepad: {
          ...state.notepad
        },
        resume: {
          ...state.resume
        }
      }
    }

    case actionTypes.FOCUS_RESUME: {
      return {
        ...state,
        about: {
          ...state.about,
        },
        notepad: {
          ...state.notepad
        },
        resume: {
          ...state.resume,
          blurred: false
        }
      }
    }

    /*----------------------------------------*\
                actionTypes BLUR
    \*----------------------------------------*/

    case actionTypes.BLUR_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          blurred: true,
        },
        resume: {
          ...state.resume
        }
      }

    case actionTypes.BLUR_ABOUT:
      return {
        ...state,
        about: {
          ...state.about,
          blurred: true
        },
        notepad: {
          ...state.notepad
        },
        resume: {
          ...state.resume
        }
      }

      case actionTypes.BLUR_RESUME:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        resume: {
          ...state.resume,
          blurred: true
        }
      }

    /*----------------------------------------*\
                actionTypes MINIMIZE
    \*----------------------------------------*/

    case actionTypes.MINIMIZE_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          minimized: true
        },
        resume: {
          ...state.resume
        }
      }

    case actionTypes.MINIMIZE_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about,
          minimized: true
        },
        resume: {
          ...state.resume
        }
      }

    case actionTypes.MINIMIZE_RESUME:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        resume: {
          ...state.resume,
          minimized: true
        }
      }

    /*----------------------------------------*\
                actionTypes MAXIMIZE
    \*----------------------------------------*/

    case actionTypes.MAXIMIZE_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad,
          blurred: false,
          minimized: false
        },
        resuem: {
          ...state.resume
        }
      }

    case actionTypes.MAXIMIZE_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about,
          minimized: false,
          blurred: false
        },
        resuem: {
          ...state.resume
        }
      }

    case actionTypes.MAXIMIZE_RESUME:
    return {
      ...state,
      notepad: {
        ...state.notepad
      },
      about: {
        ...state.about
      },
      resuem: {
        ...state.resume,
        minimized: false,
        blurred: false
      }
    }

    /*----------------------------------------*\
                actionTypes EXIT
    \*----------------------------------------*/

    case actionTypes.EXIT_NOTEPAD:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          show: false,
          minimized: false,
          blurred: false
        },
        resume: {
          ...state.resume
        }
      }

    case actionTypes.EXIT_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          show: false,
          blurred: false,
          minimized: false
        },
        resume: {
          ...state.resume
        }
      }

    case actionTypes.EXIT_MODAL:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        showModal: false,
        resume: {
          ...state.resume
        }
      }
    
    case actionTypes.EXIT_RESUME:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        resume: {
          show: false,
          blurred: false,
          minimized: false
        }
      }

    default: return state;
  }
}

export default reducer;