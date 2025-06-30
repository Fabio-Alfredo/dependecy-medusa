"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchableEntity2 = exports.SearchableEntity1 = exports.RecursiveEntity2 = exports.RecursiveEntity1 = exports.InternalCircularDependencyEntity1 = exports.Entity2WithUnDecoratedProp = exports.Entity2 = exports.Entity1WithUnDecoratedProp = exports.Entity1 = exports.DeepRecursiveEntity4 = exports.DeepRecursiveEntity3 = exports.DeepRecursiveEntity2 = exports.DeepRecursiveEntity1 = void 0;
const core_1 = require("@mikro-orm/core");
const searchable_1 = require("../../decorators/searchable");
// Circular dependency one level
let RecursiveEntity1 = class RecursiveEntity1 {
    constructor(props) {
        this.entity2 = new core_1.Collection(this);
        this.id = props.id;
        this.deleted_at = props.deleted_at;
    }
};
exports.RecursiveEntity1 = RecursiveEntity1;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], RecursiveEntity1.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], RecursiveEntity1.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.OneToMany)(() => RecursiveEntity2, (entity2) => entity2.entity1, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], RecursiveEntity1.prototype, "entity2", void 0);
exports.RecursiveEntity1 = RecursiveEntity1 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], RecursiveEntity1);
let RecursiveEntity2 = class RecursiveEntity2 {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity1 = props.entity1;
    }
};
exports.RecursiveEntity2 = RecursiveEntity2;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], RecursiveEntity2.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], RecursiveEntity2.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => RecursiveEntity1, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], RecursiveEntity2.prototype, "entity1", void 0);
exports.RecursiveEntity2 = RecursiveEntity2 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], RecursiveEntity2);
// No circular dependency
let Entity1 = class Entity1 {
    constructor(props) {
        this.entity2 = new core_1.Collection(this);
        this.id = props.id;
        this.deleted_at = props.deleted_at;
    }
};
exports.Entity1 = Entity1;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Entity1.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], Entity1.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.OneToMany)(() => Entity2, (entity2) => entity2.entity1, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], Entity1.prototype, "entity2", void 0);
exports.Entity1 = Entity1 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Entity1);
let Entity2 = class Entity2 {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity1 = props.entity1;
        this.entity1_id = props.entity1.id;
    }
};
exports.Entity2 = Entity2;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Entity2.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], Entity2.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Entity1, { mapToPk: true }),
    __metadata("design:type", String)
], Entity2.prototype, "entity1_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Entity1, { persist: false }),
    __metadata("design:type", Entity1)
], Entity2.prototype, "entity1", void 0);
exports.Entity2 = Entity2 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Entity2);
// Circular dependency deep level
let DeepRecursiveEntity1 = class DeepRecursiveEntity1 {
    constructor(props) {
        this.entity2 = new core_1.Collection(this);
        this.id = props.id;
        this.deleted_at = props.deleted_at;
    }
};
exports.DeepRecursiveEntity1 = DeepRecursiveEntity1;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], DeepRecursiveEntity1.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], DeepRecursiveEntity1.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.OneToMany)(() => DeepRecursiveEntity2, (entity2) => entity2.entity1, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], DeepRecursiveEntity1.prototype, "entity2", void 0);
exports.DeepRecursiveEntity1 = DeepRecursiveEntity1 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], DeepRecursiveEntity1);
let DeepRecursiveEntity2 = class DeepRecursiveEntity2 {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity3 = props.entity3;
    }
};
exports.DeepRecursiveEntity2 = DeepRecursiveEntity2;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], DeepRecursiveEntity2.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], DeepRecursiveEntity2.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => DeepRecursiveEntity1),
    __metadata("design:type", DeepRecursiveEntity1)
], DeepRecursiveEntity2.prototype, "entity1", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => DeepRecursiveEntity3, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], DeepRecursiveEntity2.prototype, "entity3", void 0);
exports.DeepRecursiveEntity2 = DeepRecursiveEntity2 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], DeepRecursiveEntity2);
let DeepRecursiveEntity3 = class DeepRecursiveEntity3 {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity1 = props.entity1;
    }
};
exports.DeepRecursiveEntity3 = DeepRecursiveEntity3;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], DeepRecursiveEntity3.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], DeepRecursiveEntity3.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => DeepRecursiveEntity1, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], DeepRecursiveEntity3.prototype, "entity1", void 0);
exports.DeepRecursiveEntity3 = DeepRecursiveEntity3 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], DeepRecursiveEntity3);
let DeepRecursiveEntity4 = class DeepRecursiveEntity4 {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity1 = props.entity1;
    }
};
exports.DeepRecursiveEntity4 = DeepRecursiveEntity4;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], DeepRecursiveEntity4.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], DeepRecursiveEntity4.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => DeepRecursiveEntity1),
    __metadata("design:type", Object)
], DeepRecursiveEntity4.prototype, "entity1", void 0);
exports.DeepRecursiveEntity4 = DeepRecursiveEntity4 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], DeepRecursiveEntity4);
// Internal circular dependency
let InternalCircularDependencyEntity1 = class InternalCircularDependencyEntity1 {
    constructor(props) {
        this.children = new core_1.Collection(this);
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        if (props.parent) {
            this.parent = props.parent;
        }
    }
};
exports.InternalCircularDependencyEntity1 = InternalCircularDependencyEntity1;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], InternalCircularDependencyEntity1.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], InternalCircularDependencyEntity1.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.OneToMany)(() => InternalCircularDependencyEntity1, (entity) => entity.parent, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], InternalCircularDependencyEntity1.prototype, "children", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => InternalCircularDependencyEntity1, { nullable: true }),
    __metadata("design:type", Object)
], InternalCircularDependencyEntity1.prototype, "parent", void 0);
exports.InternalCircularDependencyEntity1 = InternalCircularDependencyEntity1 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], InternalCircularDependencyEntity1);
// With un decorated prop
let Entity1WithUnDecoratedProp = class Entity1WithUnDecoratedProp {
    constructor(props) {
        this.entity2 = new core_1.Collection(this);
        this.id = props.id;
        this.deleted_at = props.deleted_at;
    }
};
exports.Entity1WithUnDecoratedProp = Entity1WithUnDecoratedProp;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Entity1WithUnDecoratedProp.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], Entity1WithUnDecoratedProp.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.OneToMany)(() => Entity2WithUnDecoratedProp, (entity2) => entity2.entity1, {
        cascade: ["soft-remove"],
    }),
    __metadata("design:type", Object)
], Entity1WithUnDecoratedProp.prototype, "entity2", void 0);
exports.Entity1WithUnDecoratedProp = Entity1WithUnDecoratedProp = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Entity1WithUnDecoratedProp);
let Entity2WithUnDecoratedProp = class Entity2WithUnDecoratedProp {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity1 = props.entity1;
        this.entity1_id = props.entity1.id;
    }
};
exports.Entity2WithUnDecoratedProp = Entity2WithUnDecoratedProp;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Entity2WithUnDecoratedProp.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], Entity2WithUnDecoratedProp.prototype, "deleted_at", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Entity1WithUnDecoratedProp, { mapToPk: true }),
    __metadata("design:type", String)
], Entity2WithUnDecoratedProp.prototype, "entity1_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => Entity1WithUnDecoratedProp, { persist: false }),
    __metadata("design:type", Object)
], Entity2WithUnDecoratedProp.prototype, "entity1", void 0);
exports.Entity2WithUnDecoratedProp = Entity2WithUnDecoratedProp = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Entity2WithUnDecoratedProp);
// Searchable fields
let SearchableEntity1 = class SearchableEntity1 {
    constructor(props) {
        this.entity2 = new core_1.Collection(this);
        this.id = props.id;
        this.deleted_at = props.deleted_at;
    }
};
exports.SearchableEntity1 = SearchableEntity1;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], SearchableEntity1.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], SearchableEntity1.prototype, "deleted_at", void 0);
__decorate([
    (0, searchable_1.Searchable)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], SearchableEntity1.prototype, "searchableField", void 0);
__decorate([
    (0, searchable_1.Searchable)(),
    (0, core_1.OneToMany)(() => SearchableEntity2, (entity2) => entity2.entity1),
    __metadata("design:type", Object)
], SearchableEntity1.prototype, "entity2", void 0);
exports.SearchableEntity1 = SearchableEntity1 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], SearchableEntity1);
let SearchableEntity2 = class SearchableEntity2 {
    constructor(props) {
        this.id = props.id;
        this.deleted_at = props.deleted_at;
        this.entity1 = props.entity1;
        this.entity1_id = props.entity1.id;
    }
};
exports.SearchableEntity2 = SearchableEntity2;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], SearchableEntity2.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Object)
], SearchableEntity2.prototype, "deleted_at", void 0);
__decorate([
    (0, searchable_1.Searchable)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], SearchableEntity2.prototype, "searchableField", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => SearchableEntity1, { mapToPk: true }),
    __metadata("design:type", String)
], SearchableEntity2.prototype, "entity1_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => SearchableEntity1, { persist: false }),
    __metadata("design:type", Object)
], SearchableEntity2.prototype, "entity1", void 0);
exports.SearchableEntity2 = SearchableEntity2 = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], SearchableEntity2);
//# sourceMappingURL=utils.js.map