<?php

/**
* Copyright Maarch since 2008 under licence GPLv3.
* See LICENCE.txt file at the root folder for more details.
* This file is part of Maarch software.
*
*/

/**
* @brief Document Model
* @author dev@maarch.org
*/

namespace Document\models;

use SrcCore\models\ValidatorModel;
use SrcCore\models\DatabaseModel;

class DocumentModel
{
    public static function get(array $aArgs)
    {
        ValidatorModel::notEmpty($aArgs, ['select']);
        ValidatorModel::arrayType($aArgs, ['select', 'where', 'data', 'orderBy']);
        ValidatorModel::intType($aArgs, ['limit', 'offset']);

        $aDocuments = DatabaseModel::select([
            'select'    => $aArgs['select'],
            'table'     => ['main_documents'],
            'where'     => empty($aArgs['where']) ? [] : $aArgs['where'],
            'data'      => empty($aArgs['data']) ? [] : $aArgs['data'],
            'orderBy'   => empty($aArgs['orderBy']) ? [] : $aArgs['orderBy'],
            'offset'    => empty($aArgs['offset']) ? 0 : $aArgs['offset'],
            'limit'     => empty($aArgs['limit']) ? 0 : $aArgs['limit'],
        ]);

        return $aDocuments;
    }

    public static function getById(array $aArgs)
    {
        ValidatorModel::notEmpty($aArgs, ['select', 'id']);
        ValidatorModel::arrayType($aArgs, ['select']);

        $document = DatabaseModel::select([
            'select'    => $aArgs['select'],
            'table'     => ['main_documents'],
            'where'     => ['id = ?'],
            'data'      => [$aArgs['id']]
        ]);

        if (empty($document[0])) {
            return [];
        }

        return $document[0];
    }

    public static function create(array $args)
    {
        ValidatorModel::notEmpty($args, ['title', 'status', 'mode', 'processing_user', 'sender', 'creator', 'metadata']);
        ValidatorModel::stringType($args, ['title', 'reference', 'description', 'mode', 'sender', 'deadline', 'metadata']);
        ValidatorModel::intVal($args, ['status', 'processing_user', 'creator']);

        $nextSequenceId = DatabaseModel::getNextSequenceValue(['sequenceId' => 'main_documents_id_seq']);

        DatabaseModel::insert([
            'table'         => 'main_documents',
            'columnsValues' => [
                'id'                => $nextSequenceId,
                'title'             => $args['title'],
                'reference'         => $args['reference'],
                'description'       => $args['description'],
                'mode'              => $args['mode'],
                'status'            => $args['status'],
                'processing_user'   => $args['processing_user'],
                'sender'            => $args['sender'],
                'deadline'          => $args['deadline'],
                'metadata'          => $args['metadata'],
                'creator'           => $args['creator']
            ]
        ]);

        return $nextSequenceId;
    }

    public static function update(array $aArgs)
    {
        ValidatorModel::notEmpty($aArgs, ['set', 'where', 'data']);
        ValidatorModel::arrayType($aArgs, ['set', 'where', 'data']);

        DatabaseModel::update([
            'table' => 'main_documents',
            'set'   => $aArgs['set'],
            'where' => $aArgs['where'],
            'data'  => $aArgs['data']
        ]);

        return true;
    }

    public static function delete(array $aArgs)
    {
        ValidatorModel::notEmpty($aArgs, ['where', 'data']);
        ValidatorModel::arrayType($aArgs, ['where', 'data']);

        DatabaseModel::delete([
            'table' => 'main_documents',
            'where' => $aArgs['where'],
            'data'  => $aArgs['data']
        ]);

        return true;
    }
}
