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

export function openDeleted() {
  return {
    type: actionTypes.OPEN_DELETED
  }
}

export function openTutorial() {
  return {
    type: actionTypes.OPEN_TUTORIAL
  }
}

export function openBiography() {
  return {
    type: actionTypes.OPEN_BIOGRAPHY
  }
}

export function openResume() {
  return {
    type: actionTypes.OPEN_RESUME
  }
}

export function openProject() {
  return {
    type: actionTypes.OPEN_PROJECT
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

export function focusDeleted() {
  return {
    type: actionTypes.FOCUS_DELETED
  }
}

export function focusBiography() {
  return {
    type: actionTypes.FOCUS_BIOGRAPHY
  }
}

export function focusResume() {
  return {
    type: actionTypes.FOCUS_RESUME
  }
}

export function focusProject() {
  return {
    type: actionTypes.FOCUS_PROJECT
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

export function blurDeleted() {
  return {
    type: actionTypes.BLUR_DELETED
  }
}

export function blurBiography() {
  return {
    type: actionTypes.BLUR_BIOGRAPHY
  }
}

export function blurResume() {
  return {
    type: actionTypes.BLUR_RESUME
  }
}

export function blurProject() {
  return {
    type: actionTypes.BLUR_PROJECT
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

export function minimizeDeleted() {
  return {
    type: actionTypes.MINIMIZE_DELETED
  }
}

export function minimizeBiography() {
  return {
    type: actionTypes.MINIMIZE_BIOGRAPHY
  }
}

export function minimizeResume() {
  return {
    type: actionTypes.MINIMIZE_RESUME
  }
}

export function minimizeProject() {
  return {
    type: actionTypes.MINIMIZE_PROJECT
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

export function maximizeDeleted() {
  return {
    type: actionTypes.MAXIMIZE_DELETED
  }
}

export function maximizeBiography() {
  return {
    type: actionTypes.MAXIMIZE_BIOGRAPHY
  }
}

export function maximizeResume() {
  return {
    type: actionTypes.MAXIMIZE_RESUME
  }
}

export function maximizeProject() {
  return {
    type: actionTypes.MAXIMIZE_PROJECT
  }
}

/*----------------------------------------*\
                  DISABLED
\*----------------------------------------*/

export function disabledNotepad() {
  return {
    type: actionTypes.DISABLED_NOTEPAD
  }
}

export function disabledDeleted() {
  return {
    type: actionTypes.DISABLED_DELETED
  }
}

export function disabledBiography() {
  return {
    type: actionTypes.DISABLED_BIOGRAPHY
  }
}

export function disabledResume() {
  return {
    type: actionTypes.DISABLED_RESUME
  }
}

export function disabledProject() {
  return {
    type: actionTypes.DISABLED_PROJECT
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

export function exitDeleted() {
  return {
    type: actionTypes.EXIT_DELETED
  }
}

export function exitTutorial() {
  return {
    type: actionTypes.EXIT_TUTORIAL
  }
}

export function exitBiography() {
  return {
    type: actionTypes.EXIT_BIOGRAPHY
  }
}

export function exitResume() {
  return {
    type: actionTypes.EXIT_RESUME
  }
}

export function exitProject() {
  return {
    type: actionTypes.EXIT_PROJECT
  }
}