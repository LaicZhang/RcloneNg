import { UsersFlow, IUser, UsersFlowNode } from './users-flow';
import { TestScheduler } from 'rxjs/testing';
import { DataFlowNode } from '../core';
import { map } from 'rxjs/operators';

describe('UsersFlow', () => {
	let scheduler: TestScheduler;
	beforeEach(
		() =>
			(scheduler = new TestScheduler((actual, expected) => {
				expect(actual).toEqual(expected);
			}))
	);
	it('get init value', () => {
		scheduler.run((helpers) => {
			const { cold, hot, expectObservable, expectSubscriptions, flush } = helpers;
			const values = {
				a: 1,
				b: [{ users: UsersFlow.defaultUser }, []],
			};
			const pre = cold('a-a--', values);
			const expected = 'b-b--';

			const rst = new (class extends UsersFlow {
				public prerequest$ = pre.pipe(map(() => [{}, []] as DataFlowNode));
			})();

			UsersFlow.purge();
			rst.deploy();

			expectObservable(rst.getOutput()).toBe(expected, values);
		});
	});
	it('get storagaed value', () => {
		scheduler.run((helpers) => {
			const { cold, hot, expectObservable, expectSubscriptions, flush } = helpers;
			const values = {
				a: 1,
				b: [{ users: [] }, []],
			};
			const pre = cold('a-a--', values);
			const expected = 'b-b--';

			const rst = new (class extends UsersFlow {
				public prerequest$ = pre.pipe(map((): DataFlowNode => [{}, []]));
			})();

			UsersFlow.setAll([]);
			rst.deploy();

			expectObservable(rst.getOutput()).toBe(expected, values);
		});
	});
	it('update sigel user', () => {
		scheduler.run((helpers) => {
			const { cold, hot, expectObservable, expectSubscriptions, flush } = helpers;
			const values = {
				a: 1,
				b: [
					{
						users: [{ name: '123', url: 'new' }] as IUser[],
					},
					[],
				],
			};
			const pre = cold('a-a--', values);
			const expected = 'b-b--';

			const rst = new (class extends UsersFlow {
				public prerequest$ = pre.pipe(map((): DataFlowNode => [{}, []]));
			})();

			UsersFlow.setAll([
				{
					name: '123',
					url: 'poi',
				},
			]);
			UsersFlow.set({ name: '123', url: 'new' });
			rst.deploy();

			expectObservable(rst.getOutput()).toBe(expected, values);
		});
	});
});
