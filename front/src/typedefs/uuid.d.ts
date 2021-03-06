/*
 * Copyright © 2018, Octave Online LLC
 *
 * This file is part of Octave Online Server.
 *
 * Octave Online Server is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Octave Online Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Octave Online Server.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

///<reference path='../boris-typedefs/node/node.d.ts'/>

declare module 'uuid' {
	interface UuidOptionsV1 {
		node?: Buffer
		clockseq?: number
		msecs?: number
		nsecs?: number
	}

	interface UuidOptionsV4 {
		random: number
		rng: Function
	}

	module Uuid {
		export function v1(options: UuidOptionsV1, buffer: Buffer, offset: number): Buffer;
		export function v1(options?: UuidOptionsV1): string;

		export function v4(options: UuidOptionsV4, buffer: Buffer, offset: number): Buffer;
		export function v4(options?: UuidOptionsV4): string;

		export function parse(id: string, buffer?: Buffer, offset?: number): Buffer;
		export function unparse(id: Buffer, offset?: number): string;
	}

	export = Uuid;
}

