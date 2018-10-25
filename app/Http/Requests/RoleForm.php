<?php

namespace ElectricalBlog\Http\Requests;

use ElectricalBlog\Role;
use Illuminate\Foundation\Http\FormRequest;

class RoleForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'permissions' => '',
            'name' => '',
            'policy_type' => ''
        ];
    }

    public function persist()
    {
        $this->preparePermission();
        Role::updateOrCreate(
            ['name' => $this->name],
            $this->except(['name'])
        );
    }

    public function preparePermission()
    {
        $permissions = [
            'view' => false, 'update' => false, 'delete' => false, 'create' => false
        ];
        foreach ($this->permissions as $key => $value) {
            if (array_key_exists($value, $permissions)) {
                $permissions[$value] = true;
            }
        }
        $this->request->add(['permissions' => $permissions]);
    }
}
