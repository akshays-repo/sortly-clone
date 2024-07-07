import { TreeItem } from "./tree-item";
import { type TreeViewElement, Tree, CollapseButton } from "./tree-view-api";

type TOCProps = {
	toc: TreeViewElement[];
};

export const TOC = ({ toc }: TOCProps) => {
	return (
		<Tree className="w-full rounded-md bg-background" indicator={true}>
			{toc.map((element, _) => (
				<TreeItem key={element.id} elements={[element]} />
			))}
			<CollapseButton elements={toc} expandAll={true} />
		</Tree>
	);
};
