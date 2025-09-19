import manifest from '@neos-project/neos-ui-extensibility';

manifest('Networkteam.Neos.Next', {}, (globalRegistry) => {
  const serverFeedbackHandlers = globalRegistry.get('serverFeedbackHandlers')
  
  serverFeedbackHandlers.set('Neos.Neos.Ui:ReloadContentOutOfBand/Main', (feedback, store) => {
    const guestFrame = document.getElementsByName('neos-content-main')[0];
    const reloadOutOfBandEvent = new Event('Networkteam.Neos.Next:ReloadOutOfBand');
    guestFrame.contentWindow.dispatchEvent(reloadOutOfBandEvent);
  })
});
