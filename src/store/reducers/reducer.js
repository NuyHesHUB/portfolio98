import * as actionTypes from '../actions/actionTypes';
/* import { getEnvConfig } from '../../components/utiles/getEnvConfig'; */

const initialState = {
  /* isBiosLoaded : getEnvConfig().isDevelopment,
  isWindowsLoaded : getEnvConfig().isDevelopment, */
  /* systemLoading: false, */
  showStart: false,
  showTutorial: true,
  about: {
    show: false,
    blurred: true,
  },
  notepad: {
    show: true,
    blurred: false,
    minimized: false,
    maximized:false,
  },
  deleted: {
    show: false,
    blurred: true,
    minimized: false,
    maximized: false,
  },
  biography: {
    show: false,
    blurred: true,
    minimized: false,
    maximized: false,
  },
  resume: {
    show: false,
    blurred: true,
    minimized: false,
    maximized: false,
  },
  project: {
    show: false,
    blurred: true,
    minimized: false,
    maximized: false,
  },
  shutDown: false,
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
        deleted: {
          ...state.deleted
        },
        showStart: false,
      }
      
    /*----------------------------------------*\
                actionTypes OPEN
    \*----------------------------------------*/

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
        deleted: {
          ...state.deleted,
          blurred: true
        },
        biography: {
          ...state.biography,
          blurred: true
        },
        resume: {
          ...state.resume,
          blureed: true
        },
        project: {
          ...state.project,
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
        deleted: {
          ...state.deleted,
          blurred: true
        },
        biography: {
          ...state.biography,
          blurred: true
        },
        resume: {
          ...state.resume,
          blureed: true
        },
        project: {
          ...state.project,
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
      deleted: {
        show: true,
        blurred: false,
        minimized: false,
        maximized: false,
      },
      biography: {
        ...state.biography,
        blurred: true
      },
      resume: {
        ...state.resume,
        blureed: true
      },
      project: {
        ...state.project,
        blurred: true
      }
    }

    case actionTypes.OPEN_TUTORIAL:
      return{
        ...state,
        /* showTutorial: !state.showTutorial, */
        showTutorial: true,
        biography: {
          ...state.biography,
          show: false,
          blurred: true,
        },
        notepad: {
          ...state.notepad,
          show: true,
          blurred: false,
        },
      }

    case actionTypes.OPEN_BIOGRAPHY:
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
        deleted: {
          ...state.deleted,
          blurred: true
        },
        biography: {
          show: true,
          blurred: false,
          minimized: false,
          maximized: false,
        },
        resume: {
          ...state.resume,
          blureed: true
        },
        project: {
          ...state.project,
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
        deleted: {
          ...state.deleted,
          blurred: true
        },
        biography: {
          ...state.biography,
          blureed: true
        },
        resume: {
          show: true,
          blurred: false,
          minimized: false,
          maximized: false,
        },
        project: {
          ...state.project,
          blurred: true
        }
      }

      case actionTypes.OPEN_PROJECT:
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
        deleted: {
          ...state.deleted,
          blurred: true
        },
        biography: {
          ...state.biography,
          blurred: true
        },
        resume: {
          ...state.resume,
          blureed: true
        },
        project: {
          show: true,
          blurred: false,
          minimized: false,
          maximized: false,
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted,
          blurred: false
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
        }
      }
    }

    case actionTypes.FOCUS_BIOGRAPHY: {
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography,
          blurred: false
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
        }
      }
    }
    
    case actionTypes.FOCUS_RESUME: {
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume,
          blurred: false
        },
        project: {
          ...state.project
        }
      }
    }

    case actionTypes.FOCUS_PROJECT: {
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project,
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted,
          blurred: true
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
        }
      }

      case actionTypes.BLUR_BIOGRAPHY:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography,
          blurred: true
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume,
          blurred: true
        },
        project: {
          ...state.project
        }
      }

      case actionTypes.BLUR_PROJECT:
      return {
        ...state,
        about: {
          ...state.about
        },
        notepad: {
          ...state.notepad
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project,
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
      deleted: {
        ...state.deleted,
        minimized: true,
      },
      biography: {
        ...state.biography
      },
      resume: {
        ...state.resume
      },
      project: {
        ...state.project
      }
    }

    case actionTypes.MINIMIZE_BIOGRAPHY:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography,
          minimized: true
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume,
          minimized: true
        },
        project: {
          ...state.project
        }
      }

      case actionTypes.MINIMIZE_PROJECT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project,
          minimized: true
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted,
          maximized: true
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
        }
      }

    case actionTypes.MAXIMIZE_BIOGRAPHY:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography,
          maximized: true
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume,
          maximized: true
        },
        project: {
          ...state.project
        }
      }

      case actionTypes.MAXIMIZE_PROJECT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project,
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
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
      deleted: {
        ...state.deleted,
        maximized: false
      },
      biography: {
        ...state.biography
      },
      resume: {
        ...state.resume
      },
      project: {
        ...state.project
      }
    }

    case actionTypes.DISABLED_BIOGRAPHY:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography,
          maximized: false
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
        }
      }

      case actionTypes.DISABLED_RESUME:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume,
          maximized: false
        },
        project: {
          ...state.project
        }
      }

      case actionTypes.DISABLED_PROJECT:
      return {
        ...state,
        notepad: {
          ...state.notepad
        },
        about: {
          ...state.about
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project,
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
          blurred: true
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
          blurred: true,
        },
        deleted: {
          ...state.deleted
        },
        biography: {
          ...state.biography
        },
        resume: {
          ...state.resume
        },
        project: {
          ...state.project
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
      deleted: {
        show: false,
        blurred: true,
        minimized: false,
        maximized: false,
      },
      biography: {
        ...state.biography
      },
      resume: {
        ...state.resume
      },
      project: {
        ...state.project
      }
    }

    case actionTypes.EXIT_BIOGRAPHY:
    return {
      ...state,
      notepad: {
        ...state.notepad
      },
      about: {
        ...state.about
      },
      deleted: {
        ...state.deleted
      },
      biography: {
        show: false,
        minimized: false,
        maximized: false,
        blurred: true
      },
      resume: {
        ...state.resume
      },
      project: {
        ...state.project
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
      deleted: {
        ...state.deleted
      },
      biography: {
        ...state.biography,
      },
      resume: {
        show: false,
        minimized: false,
        maximized: false,
        blurred: true
      },
      project: {
        ...state.project
      }
    }

    case actionTypes.EXIT_PROJECT:
    return {
      ...state,
      notepad: {
        ...state.notepad
      },
      about: {
        ...state.about
      },
      deleted: {
        ...state.deleted
      },
      biography: {
        ...state.biography
      },
      resume: {
        ...state.resume
      },
      project: {
        show: false,
        minimized: false,
        maximized: false,
        blurred: true
      }
    }

    case actionTypes.EXIT_TUTORIAL:
      return{
        ...state,
        /* showTutorial: !state.showTutorial, */
        showTutorial: false,
        biography: {
          ...state.biography,
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