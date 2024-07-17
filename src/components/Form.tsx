import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const UserForm = ({ formData, setFormData }: any) => {
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form className="grid grid-cols-2 gap-4 p-4 border rounded">
      <label className="text-sm text-neutral-600">Name:</label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="text-sm text-neutral-600">Description:</label>
      <Input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label className="text-sm text-neutral-600">Avatar:</label>
      <Switch
        name="avatar"
        checked={formData.avatar}
        onCheckedChange={checked => handleChange({ target: { name: 'avatar', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">AvatarUrl:</label>
      <Input
        type="text"
        name="avatarUrl"
        value={formData.avatarUrl}
        onChange={handleChange}
      />

      <label className="text-sm text-neutral-600">Background Color:</label>
      <Input
        type="color"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label className="text-sm text-neutral-600">Border:</label>
      <Switch
        name="border"
        checked={formData.border}
        onCheckedChange={checked => handleChange({ target: { name: 'border', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Disabled:</label>
      <Switch
        name="disabled"
        checked={formData.disabled}
        onCheckedChange={checked => handleChange({ target: { name: 'disabled', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Width:</label>
      <Input
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label className="text-sm text-neutral-600">Online:</label>
      <Switch
        name="online"
        checked={formData.online}
        onCheckedChange={checked => handleChange({ target: { name: 'online', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Only Avatar:</label>
      <Switch
        name="onlyAvatar"
        checked={formData.onlyAvatar}
        onCheckedChange={checked => handleChange({ target: { name: 'onlyAvatar', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Reverse:</label>
      <Switch
        name="reverse"
        checked={formData.reverse}
        onCheckedChange={checked => handleChange({ target: { name: 'reverse', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Squared:</label>
      <Switch
        name="squared"
        checked={formData.squared}
        onCheckedChange={checked => handleChange({ target: { name: 'squared', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Status:</label>
      <Switch
        name="status"
        checked={formData.status}
        onCheckedChange={checked => handleChange({ target: { name: 'status', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Shadow:</label>
      <Switch
        name="shadow"
        checked={formData.shadow}
        onCheckedChange={checked => handleChange({ target: { name: 'shadow', type: 'checkbox', checked } })}
      />

      <label className="text-sm text-neutral-600">Verified:</label>
      <Switch
        name="verified"
        checked={formData.verified}
        onCheckedChange={checked => handleChange({ target: { name: 'verified', type: 'checkbox', checked } })}
      />
    </form>
  );
};

export default UserForm;
