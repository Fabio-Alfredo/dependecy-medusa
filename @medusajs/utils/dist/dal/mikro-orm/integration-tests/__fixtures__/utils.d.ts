import { Collection, Rel } from "@mikro-orm/core";
declare class RecursiveEntity1 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
    });
    id: string;
    deleted_at: Date | null;
    entity2: Collection<RecursiveEntity2, object>;
}
declare class RecursiveEntity2 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: RecursiveEntity1;
    });
    id: string;
    deleted_at: Date | null;
    entity1: Rel<RecursiveEntity1>;
}
declare class Entity1 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
    });
    id: string;
    deleted_at: Date | null;
    entity2: Collection<Entity2, object>;
}
declare class Entity2 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: Rel<Entity1>;
    });
    id: string;
    deleted_at: Date | null;
    entity1_id: string;
    entity1: Entity1;
}
declare class DeepRecursiveEntity1 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
    });
    id: string;
    deleted_at: Date | null;
    entity2: Collection<DeepRecursiveEntity2, object>;
}
declare class DeepRecursiveEntity2 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: Rel<DeepRecursiveEntity1>;
        entity3: Rel<DeepRecursiveEntity3>;
    });
    id: string;
    deleted_at: Date | null;
    entity1: DeepRecursiveEntity1;
    entity3: Rel<DeepRecursiveEntity3>;
}
declare class DeepRecursiveEntity3 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: Rel<DeepRecursiveEntity1>;
    });
    id: string;
    deleted_at: Date | null;
    entity1: Rel<DeepRecursiveEntity1>;
}
declare class DeepRecursiveEntity4 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: Rel<DeepRecursiveEntity1>;
    });
    id: string;
    deleted_at: Date | null;
    entity1: Rel<DeepRecursiveEntity1>;
}
declare class InternalCircularDependencyEntity1 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        parent?: InternalCircularDependencyEntity1;
    });
    id: string;
    deleted_at: Date | null;
    children: Collection<InternalCircularDependencyEntity1, object>;
    parent: Rel<InternalCircularDependencyEntity1>;
}
declare class Entity1WithUnDecoratedProp {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
    });
    unknownProp: string;
    id: string;
    deleted_at: Date | null;
    entity2: Collection<Entity2WithUnDecoratedProp, object>;
}
declare class Entity2WithUnDecoratedProp {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: Rel<Entity1WithUnDecoratedProp>;
    });
    unknownProp: string;
    id: string;
    deleted_at: Date | null;
    entity1_id: string;
    entity1: Rel<Entity1WithUnDecoratedProp>;
}
declare class SearchableEntity1 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
    });
    id: string;
    deleted_at: Date | null;
    searchableField: string;
    entity2: Collection<SearchableEntity2, object>;
}
declare class SearchableEntity2 {
    constructor(props: {
        id: string;
        deleted_at: Date | null;
        entity1: SearchableEntity1;
    });
    id: string;
    deleted_at: Date | null;
    searchableField: string;
    entity1_id: string;
    entity1: Rel<SearchableEntity1>;
}
export { DeepRecursiveEntity1, DeepRecursiveEntity2, DeepRecursiveEntity3, DeepRecursiveEntity4, Entity1, Entity1WithUnDecoratedProp, Entity2, Entity2WithUnDecoratedProp, InternalCircularDependencyEntity1, RecursiveEntity1, RecursiveEntity2, SearchableEntity1, SearchableEntity2, };
//# sourceMappingURL=utils.d.ts.map