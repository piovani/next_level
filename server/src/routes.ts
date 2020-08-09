import express, { response, response } from 'express';
import db from './database/connection';
import convertToHourToMinutes from '../utils/convertHourToMinites';

const routes = express.Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;
    
    const trx = await db.transaction();

    try {
        const insertUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
        });

        const user_id = insertUsersIds[0];

        const insertClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id,
        });

        const class_id = insertClassesIds[0];

        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return { 
                class_id,
                week_day: scheduleItem.week_day,
                from: convertToHourToMinutes(scheduleItem.from),
                to: convertToHourToMinutes(scheduleItem.to)
            }
        })

        await trx('class_schedule').insert(classSchedule);

        await trx.commit();

        return response.status(201).send();

    } catch (exeception) {

        trx.rollback();

        console.log(exeception);

        return response.status(400).json({
            error: 'Unexpected error while creating new class',
        });
    }
});

export default routes;