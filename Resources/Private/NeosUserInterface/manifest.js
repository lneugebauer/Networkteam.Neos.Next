import manifest from '@neos-project/neos-ui-extensibility';
import {actions, selectors} from '@neos-project/neos-ui-redux-store';

manifest('Networkteam.Neos.Next', {}, (globalRegistry) => {
  const serverFeedbackHandlers = globalRegistry.get('serverFeedbackHandlers')

  serverFeedbackHandlers.set('Neos.Neos.Ui:ReloadContentOutOfBand/Main', (feedback,  {store, globalRegistry}) => {
    console.log('stuff dispatched')
    const guestFrame = document.getElementsByName('neos-content-main')[0];
    const reloadOutOfBandEvent = new Event('Networkteam.Neos.Next:ReloadOutOfBand');
    guestFrame.contentWindow.dispatchEvent(reloadOutOfBandEvent);

    debugger;
  })
  serverFeedbackHandlers.set('Neos.Neos.Ui:UpdateNodeInfo/Main', (feedbackPayload, {store}) => {
    const state = store.getState();
    console.log('UpdateNodeInfo received:', {
      isSaving: state.ui.remote.isSaving,
      payload: feedbackPayload.byContextPath
    });
    store.dispatch(actions.CR.Nodes.merge(feedbackPayload.byContextPath));
  });
});
