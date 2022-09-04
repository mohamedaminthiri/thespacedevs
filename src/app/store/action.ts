export enum ActionTypes {
  
    Loadlaunches = '[Launches] récupération des lancements from serveur'
  }
  export const GetLaunches= () => ({
    type: ActionTypes.Loadlaunches
  });
