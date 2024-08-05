// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/typeParameters.hbs

import type { JSONOutput } from 'typedoc';
import { Comment } from './Comment';
import { DefaultValue } from './DefaultValue';
import { Type } from './Type';

export interface TypeParametersProps {
	params?: JSONOutput.TypeParameterReflection[];
}

export function TypeParameters({ params }: TypeParametersProps) {
	if (!params || params.length === 0) {
		return null;
	}

	return (
		<table className="tsd-type-parameters">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{params.map((param) => (
					<tr key={param.id}>
						<td>
							<strong>{param.name}</strong>
						</td>
						<td>{param.type && <Type type={param.type} />}</td>
						<td>
							<DefaultValue comment={param.comment} type={param.type} value={param.default} />
						</td>
						<td>
							<Comment comment={param.comment} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
