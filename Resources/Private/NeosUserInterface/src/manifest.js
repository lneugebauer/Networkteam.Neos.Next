import manifest from '@neos-project/neos-ui-extensibility';

manifest('Networkteam.Neos.Next', {}, (globalRegistry) => {
  const saveHooksRegistry = globalRegistry.get('inspector').get('saveHooks')
  console.log('Trying to register custom Registry Hook');
  saveHooksRegistry.set('Networkteam.Neos.Next:Hook.BeforeSave', (oldValue, options) => {
    console.log(`value:`, value);
    console.log('options:', options);
    return oldValue;
  })
});
