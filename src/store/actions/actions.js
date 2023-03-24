import * as actionTypes from './actionTypes';

/*----------------------------------------*\
                    BIOS
\*----------------------------------------*/
/* export function ChangeBiosLoadingStatus() {
  return {
    type: actionTypes.CHANGE_BIOS_LOADING_STATUS,
    loadingStatus: Boolean
  }
}

export function ChangeWindowsLoadingStatus() {
  return {
    type: actionTypes.CHANGE_WINDOWS_LOADING_STATUS,
    loadingStatus: Boolean
  }
} */

/*----------------------------------------*\
                SHUT_DOWN
\*----------------------------------------*/
export function shutDown() {
  return {
    type: actionTypes.SHUT_DOWN
  }
}
/*----------------------------------------*\
                  START
\*----------------------------------------*/
export function startButtonClicked() {
  return {
    type: actionTypes.START_BUTTON_CLICKED
  }
}

export function startTutorialClicked() {
  return {
    type: actionTypes.START_TUTORIAL_CLICKED
  }
}

export function startMenuBlur() {
  return {
    type: actionTypes.START_MENU_BLUR
  }
}

/*----------------------------------------*\
                   OPEN
\*----------------------------------------*/
export function openNotepad() {
  return {
    type: actionTypes.OPEN_NOTEPAD
  }
}

export function openAbout() {
  return {
    type: actionTypes.OPEN_ABOUT
  }
}

export function openModal() {
  return {
    type: actionTypes.OPEN_MODAL
  }
}

export function openResume() {
  return {
    type: actionTypes.OPEN_RESUME
  }
}

export function openDeleted() {
  return {
    type: actionTypes.OPEN_DELETED
  }
}

/*----------------------------------------*\
                  FOCUS
\*----------------------------------------*/
export function focusNotepad() {
  return {
    type: actionTypes.FOCUS_NOTEPAD
  }
}

export function focusAbout() {
  return {
    type: actionTypes.FOCUS_ABOUT
  }
}

export function focusResume() {
  return {
    type: actionTypes.FOCUS_RESUME
  }
}

export function focusDeleted() {
  return {
    type: actionTypes.FOCUS_DELETED
  }
}
/*----------------------------------------*\
                  BLUR
\*----------------------------------------*/
export function blurNotepad() {
  return {
    type: actionTypes.BLUR_NOTEPAD
  }
}

export function blurAbout() {
  return {
    type: actionTypes.BLUR_ABOUT
  }
}

export function blurResume() {
  return {
    type: actionTypes.BLUR_RESUME
  }
}

export function blurDeleted() {
  return {
    type: actionTypes.BLUR_DELETED
  }
}
/*----------------------------------------*\
                  MINIMIZE
\*----------------------------------------*/
export function minimizeNotepad() {
  return {
    type: actionTypes.MINIMIZE_NOTEPAD
  }
}

/* export function minimizeAbout() {
  return {
    type: actionTypes.MINIMIZE_ABOUT
  }
} */

export function minimizeResume() {
  return {
    type: actionTypes.MINIMIZE_RESUME
  }
}

export function minimizeDeleted() {
  return {
    type: actionTypes.MINIMIZE_DELETED
  }
}
/*----------------------------------------*\
                  MAXIMIZE
\*----------------------------------------*/
export function maximizeNotepad() {
  return {
    type: actionTypes.MAXIMIZE_NOTEPAD
  }
}

/* export function maximizeAbout() {
  return {
    type: actionTypes.MAXIMIZE_ABOUT
  }
} */

export function maximizeResume() {
  return {
    type: actionTypes.MAXIMIZE_RESUME
  }
}

export function maximizeDeleted() {
  return {
    type: actionTypes.MAXIMIZE_DELETED
  }
}
/*----------------------------------------*\
                  DISABLED
\*----------------------------------------*/
/* export function disabledAbout() {
  return {
    type: actionTypes.DISABLED_ABOUT
  }
} */
export function disabledNotepad() {
  return {
    type: actionTypes.DISABLED_NOTEPAD
  }
}
export function disabledResume() {
  return {
    type: actionTypes.DISABLED_RESUME
  }
}

export function disabledDeleted() {
  return {
    type: actionTypes.DISABLED_DELETED
  }
}
/*----------------------------------------*\
                   EXIT
\*----------------------------------------*/
export function exitNotepad() {
  return {
    type: actionTypes.EXIT_NOTEPAD
  }
}

export function exitAbout() {
  return {
    type: actionTypes.EXIT_ABOUT
  }
}

export function exitModal() {
  return {
    type: actionTypes.EXIT_MODAL
  }
}

export function exitResume() {
  return {
    type: actionTypes.EXIT_RESUME
  }
}

export function exitDeleted() {
  return {
    type: actionTypes.EXIT_DELETED
  }
}