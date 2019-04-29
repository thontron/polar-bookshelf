import * as firebase from './lib/firebase';
import {RendererAnalytics} from '../ga/RendererAnalytics';
import {AsyncProviders} from '../util/Providers';
import {Firebase} from './Firebase';
import {Logger} from '../logger/Logger';
import {AuthHandlers} from '../apps/repository/auth_handler/AuthHandler';

const log = Logger.create();

const tracer = RendererAnalytics.createTracer('firestore');

const opts: FirestoreOptions = {enablePersistence: true};

export class Firestore {

    private static firestoreProvider = AsyncProviders.memoize(async () => await Firestore.createInstance(opts));

    public static async getInstance(): Promise<firebase.firestore.Firestore> {
        Firebase.init();

        return await this.firestoreProvider();
    }

    private static async createInstance(opts: FirestoreOptions = {}): Promise<firebase.firestore.Firestore> {

        return await tracer.traceAsync('createInstance', async () => {

            log.notice("Running with Firebase version: " + firebase.SDK_VERSION);

            const result = firebase.firestore();

            const settings = {
                // timestampsInSnapshots: true
            };

            result.settings(settings);

            if (opts.enablePersistence) {

                // result.enablePersistence({ experimentalTabSynchronization: true })
                //     .catch(err => log.error("Unable to enable firebase persistence: ", err));

                // TODO: this seems super slow and not sure why.  The tab sync
                // seems to not impact performance at all.
                await tracer.traceAsync('enablePersistence', async () => {
                    await result.enablePersistence({ experimentalTabSynchronization: true });
                });

                // await tracer.traceAsync('currentUser', async () => {
                //     await this.currentUser();
                // });


            }

            return result;

        });

    }

    protected static async currentUser(): Promise<firebase.User | null> {

        return new Promise<firebase.User | null>((resolve, reject) => {

            const unsubscribe = firebase.auth()
                .onAuthStateChanged((user) => {
                                        unsubscribe();
                                        resolve(user);
                                    },
                                    (err) => {
                                        unsubscribe();
                                        reject(err);
                                    });

        });

    }
}

export interface FirestoreOptions {
    readonly enablePersistence?: boolean;
}

