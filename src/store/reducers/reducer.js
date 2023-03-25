import * as actionTypes from '../actions/actionTypes';
/* import { getEnvConfig } from '../../components/utiles/getEnvConfig'; */

const initialState = {
  /* isBiosLoaded : getEnvConfig().isDevelopment,
  isWindowsLoaded : getEnvConfig().isDevelopment, */
  /* systemLoading: false, */
  showStart: false,
  showModal: false,
  /* showTutorial: false, */
  showTutorial: true,
  about: {
    show: false,
    blurred: false,
    /* minimized: false,
    maximized:false, */
  },
  notepad: {
    show: true,
    blurred: false,
    minimized: false,
    maximized:false,
  },
  resume: {
    show: false,
    blurred: false,
    minimized: false,
    maximized: false,
  },
  deleted: {
    show: false,
    blurred: false,
    minimized: false,
    maximized: false,
  },
  shutDown: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /*----------------------------------------*\
                actionTypes BIOS
    \*----------------------------------------*/
    /* case actionTypes.CHANGE_BIOS_LOADING_STATUS:
      return {
        ...state,
        isBiosLoaded: action.loadingStatus
      }
      case actionTypes.CHANGE_WINDOWS_LOADING_STATUS:
        return {
          ...state,
          isWindowsLoaded: action.loadingStatus
      } */
    /*----------------------------------------*\
                actionTypes SHUT_DOWN
    \*----------------------------------------*/
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
        deleted:{
          ...state.deleted
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
        deleted: {
          ...state.deleted,
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
        deleted: {
          ...state.deleted
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
        },
        deleted: {
          ...state.deleted,
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
          minimized: false,
          /* maximized: true, */
        },
        resume: {
          ...state.resume,
          blurred: true
        },
        deleted: {
          ...state.deleted,
          blurred: true
        }
      }

    case actionTypes.OPEN_ABOUT:
      return {
        ...state,
        about: {
          show: true,
          blurred: false,
          /* minimized: false */
        },
        notepad: {
          ...state.notepad,
          blurred: true
        },
        resume: {
          ...state.resume,
          blurred: true
        },
        deleted: {
          ...state.deleted,
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
            minimized: false,
            /* maximized: false, */
          },
          deleted: {
            ...state.deleted,
            blurred: true
          }
        }

        case actionTypes.OPEN_DELETED:
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
            ...state.resume,
            blurred: true
          },
          deleted: {
            show: true,
            blurred: false,
            minimized: false,
            maximized: false,
          }
        }
      case actionTypes.OPEN_TUTORIAL:
        return{
          ...state,
          /* showTutorial: !state.showTutorial, */
          showTutorial: true,
          resume: {
            ...state.resume,
            show: false,
            blurred: true,
          },
          notepad: {
            ...state.notepad,
            show: true,
            blurred: false,
          },
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
        },
        deleted: {
          ...state.deleted
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
        },
        deleted: {
          ...state.deleted
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
        },
        deleted: {
          ...state.deleted
        }
      }
    }

    case actionTypes.FOCUS_DELETED: {
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
        },
        deleted: {
          ...state.deleted,
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
        },
        deleted: {
          ...state.deleted
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
        },
        deleted: {
          ...state.deleted
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
        },
        deleted: {
          ...state.deleted
        }
      }

      case actionTypes.BLUR_DELETED:
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
        deleted: {
          ...state.deleted,
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
        },
        deleted: {
          ...state.deleted
        }
      }

    /* case actionTypes.MINIMIZE_ABOUT:
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
      } */

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
          minimized: true,
        },
        deleted: {
          ...state.deleted
        }
      }

      case actionTypes.MINIMIZE_DELETED:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        resume: {
          ...state.resume
        },
        deleted: {
          ...state.deleted,
          minimized: true,
        }
      }

    /*----------------------------------------*\
                actionTypes MAXIMIZE
    \*----------------------------------------*/

    case actionTypes.MAXIMIZE_NOTEPAD:
      return {
        ...state,
        notepad: {
          ...state.notepad,
          maximized: true
        },
        about: {
          ...state.about
        },
        resuem: {
          ...state.resume
        },
        deleted: {
          ...state.deleted
        }
      }

    /* case actionTypes.MAXIMIZE_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about,
        },
        resuem: {
          ...state.resume
        }
      } */
    case actionTypes.MAXIMIZE_RESUME:
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
          maximized: true
        },
        deleted: {
          ...state.deleted
        }
      }

      case actionTypes.MAXIMIZE_DELETED:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        resume: {
          ...state.resume
        },
        deleted: {
          ...state.deleted,
          maximized: true
        }
      }
    /*----------------------------------------*\
            actionTypes MAXIMIZE Disabled
    \*----------------------------------------*/
    case actionTypes.DISABLED_NOTEPAD:
      return {
        ...state,
        notepad: {
          ...state.notepad,
          maximized: false
        },
        about: {
          ...state.about
        },
        resume: {
          ...state.resume
        },
        deleted: {
          ...state.deleted
        }
      }
    /* case actionTypes.DISABLED_ABOUT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about,
        },
        resume: {
          ...state.resume
        }
      } */
    case actionTypes.DISABLED_RESUME:
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
          maximized: false
        },
        deleted: {
          ...state.deleted
        }
      }

      case actionTypes.DISABLED_DELETED:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        resume: {
          ...state.resume
        },
        deleted: {
          ...state.deleted,
          maximized: false
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
          maximized: false,
          blurred: false
        },
        resume: {
          ...state.resume
        },
        deleted: {
          ...state.deleted
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
          /* minimized: false,
          maximized: false, */
        },
        resume: {
          ...state.resume
        },
        deleted: {
          ...state.deleted
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
        },
        deleted: {
          ...state.deleted
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
          minimized: false,
          maximized: false,
        },
        deleted: {
          ...state.deleted
        }
      }

      case actionTypes.EXIT_DELETED:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        resume: {
          ...state.resume
        },
        deleted: {
          show: false,
          blurred: false,
          minimized: false,
          maximized: false,
        }
      }

      case actionTypes.EXIT_TUTORIAL:
        return{
          ...state,
          /* showTutorial: !state.showTutorial, */
          showTutorial: false,
          resume: {
            ...state.resume,
            show: true,
            blurred: false,
          },
          notepad: {
            ...state.notepad,
            show: false,
            blurred: true,
          },
          
        }

    default: return state;
  }
}

export default reducer;