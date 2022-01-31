export class Homework {
    constructor( id, work_id, work, deadline, is_done, tags, user_id) {
        this.id = id;
        this.work_id = work_id;
        this.work = work;
        this.deadline = deadline;
        this.is_done = is_done;
        this.tags = tags;
        this.user_id = user_id;
    }
}

export class NewHomework {
    constructor( work_id, work, deadline, is_done, tags, user_id) {
        this.work_id = work_id;
        this.work = work;
        this.deadline = deadline;
        this.is_done = is_done;
        this.tags = tags;
        this.user_id = user_id;
    }
}