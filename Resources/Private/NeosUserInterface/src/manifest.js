import manifest from '@neos-project/neos-ui-extensibility';

manifest('Networkteam.Neos.Next', {}, (globalRegistry) => {
  const saveHooksRegistry = globalRegistry.get('inspector').get('saveHooks')
  const serverFeedbackHandlers = globalRegistry.get('serverFeedbackHandlers')
  saveHooksRegistry.set('Networkteam.Neos.Next:Hook.BeforeSave', (oldValue, options) => {
    console.log(`value:`, oldValue);
    console.log('options:', options);
    return oldValue;
  })

  serverFeedbackHandlers.set('Neos.Neos.Ui:ReloadContentOutOfBand/Main', (feedback, store) => {
    console.log('reloadContentOufOfBand');
    const guestFrame = document.getElementsByName('neos-content-main')[0];
    console.log(guestFrame);
    const event = new Event('Networkteam.Neos.Next:ReloadOutOfBand');
    console.log(event)
    guestFrame.contentWindow.dispatchEvent(event);
  })
});
